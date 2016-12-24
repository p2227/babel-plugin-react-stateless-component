import Plugin from './plugin';

var plugin;
function pluginCaller(method,args){
  if(plugin[method]) return plugin[method](...args)
}

/**
 * # babel 转换器
 */
export default function protoAdapter ({ types }) {
  var defaultConfig = {
    distReactVersion:'0.13'
  }
  return {
    visitor: {
      Program(path, { opts }) {
        plugin = new Plugin(Object.assign(defaultConfig,opts));
      },
      ArrowFunctionExpression(){
        pluginCaller('fn2ReactClass',arguments)
      },
      FunctionExpression(){
        pluginCaller('fn2ReactClass',arguments)
      },
      FunctionDeclaration(){
        pluginCaller('fn2ReactClass',arguments)
      }
    },
  };

}
