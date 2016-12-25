'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fn2ReactClass;

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

var _babelTemplate = require('babel-template');

var _babelTemplate2 = _interopRequireDefault(_babelTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var ReactClassTemplate = (0, _babelTemplate2.default)('\n  class ID extends React.Component {\n    render(){\n      TPL_PROPS\n      TPL_FNBODY\n    }\n  }\n');

var propsTemplate = (0, _babelTemplate2.default)('const TPL_PROP = this.props;');

function fn2ReactClass(path) {
  var node = path.node,
      parent = path.parent;

  if ( //原来就是React组件
  t.isCallExpression(parent) && parent.arguments && parent.arguments[0] && parent.arguments[0].object && parent.arguments[0].object.name === 'React' || node.id && node.id.name === 'render') {
    return;
  }

  var body = node.body,
      params = node.params;
  var hasVisit = this.hasVisit;


  var codePosition = 0;
  if (body.loc) {
    codePosition = body.loc.start.line; //有代码行数，表明是从文件中读取出来的
  } else {
      return; //无代码行数，表明是template里面的ast
    }
  var fnBody = void 0,
      //函数体
  fnLastBlock = void 0,
      //函数里面的最后一条语句
  ifCondition = void 0; //ast替换的条件

  if (t.isBlockStatement(body)) {
    // 函数有花括号
    fnBody = body.body;
    fnLastBlock = fnBody.slice(-1)[0];
    ifCondition = t.isReturnStatement(fnLastBlock) && t.isJSXElement(fnLastBlock.argument);
  } else {
    // 函数无花括号，只有箭头函数有这种情况，例如  ()=><div/>
    fnBody = t.returnStatement(body);
    fnLastBlock = body;
    ifCondition = t.isJSXElement(fnLastBlock);
  }
  if (!fnLastBlock || hasVisit[codePosition]) return; //空函数 || 已经访问过
  hasVisit[codePosition] = true;
  if (ifCondition) {

    var propsAst = void 0;

    if (params.length > 0) {
      propsAst = propsTemplate({
        TPL_PROP: params[0]
      });
    }

    var id = void 0;

    if (t.isFunctionDeclaration(node)) {
      id = node.id;
    } else if (t.isFunctionExpression(node)) {
      if (t.isVariableDeclarator(parent)) {
        id = parent.id;
      } else {
        id = node.id || path.scope.generateUidIdentifier("uid");
      }
    } else {
      id = path.scope.generateUidIdentifier("uid");
    }

    var ReactClassAst = ReactClassTemplate({
      ID: id,
      TPL_PROPS: propsAst || t.emptyStatement(),
      TPL_FNBODY: fnBody
    });

    path.replaceWith(ReactClassAst);
  }
}
module.exports = exports['default'];