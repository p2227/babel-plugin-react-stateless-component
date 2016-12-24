/*
  (props)=>{
    return <div/>
  }
转化成
  class ID extends React.Component {
    render(){
      const props = this.props;
      return <div/>
    }
  }

*/

import * as t from 'babel-types';
import template from 'babel-template';

const ReactClassTemplate = template(`
  class ID extends React.Component {
    render(){
      TPL_PROPS
      TPL_FNBODY
    }
  }
`);

const propsTemplate = template(`const TPL_PROP = this.props;`);

export default function fn2ReactClass(path){
  const {node,parent} = path;
  if(  //原来就是React组件
    (t.isCallExpression(parent) &&
    parent.arguments &&
    parent.arguments[0] &&
    parent.arguments[0].object &&
    parent.arguments[0].object.name === 'React')
    ||
    ( node.id && node.id.name === 'render' )
  ){
    return;
  }

  const {body,params} = node;
  const {hasVisit} = this;

  let codePosition = 0;
  if(body.loc){
    codePosition = body.loc.start.line; //有代码行数，表明是从文件中读取出来的
  }else{
    return; //无代码行数，表明是template里面的ast
  }
  let fnBody, //函数体
    fnLastBlock,  //函数里面的最后一条语句
    ifCondition;  //ast替换的条件

  if(t.isBlockStatement(body)){ // 函数有花括号
    fnBody = body.body;
    fnLastBlock = fnBody.slice(-1)[0];
    ifCondition = t.isReturnStatement(fnLastBlock) && t.isJSXElement(fnLastBlock.argument);
  }else{// 函数无花括号，只有箭头函数有这种情况，例如  ()=><div/>
    fnBody = t.returnStatement(body);
    fnLastBlock = body;
    ifCondition = t.isJSXElement(fnLastBlock);
  }
  if(!fnLastBlock || hasVisit[codePosition]) return; //空函数 || 已经访问过
  hasVisit[codePosition] = true;
  if(ifCondition){

    let propsAst

    if(params.length > 0){
      propsAst = propsTemplate({
        TPL_PROP:params[0]
      })
    }

    let id;

    if(t.isFunctionDeclaration(node)){
      id = node.id;
    }else if(t.isFunctionExpression(node)){
      if(t.isVariableDeclarator(parent)){
        id = parent.id;
      }else{
        id = node.id || path.scope.generateUidIdentifier("uid");
      }
    }else{
      id = path.scope.generateUidIdentifier("uid");
    }


    const ReactClassAst = ReactClassTemplate({
      ID:id,
      TPL_PROPS: propsAst || t.emptyStatement(),
      TPL_FNBODY: fnBody
    });

    path.replaceWith(ReactClassAst);
  }
}
