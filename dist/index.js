'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = protoAdapter;

var _plugin2 = require('./plugin');

var _plugin3 = _interopRequireDefault(_plugin2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin;
function pluginCaller(method, args) {
  var _plugin;

  if (plugin[method]) return (_plugin = plugin)[method].apply(_plugin, (0, _toConsumableArray3.default)(args));
}

/**
 * # babel 转换器
 */
function protoAdapter(_ref) {
  var types = _ref.types;

  var defaultConfig = {
    distReactVersion: '0.13'
  };
  return {
    visitor: {
      Program: function Program(path, _ref2) {
        var opts = _ref2.opts;

        plugin = new _plugin3.default((0, _assign2.default)(defaultConfig, opts));
      },
      ArrowFunctionExpression: function ArrowFunctionExpression() {
        pluginCaller('fn2ReactClass', arguments);
      },
      FunctionExpression: function FunctionExpression() {
        pluginCaller('fn2ReactClass', arguments);
      },
      FunctionDeclaration: function FunctionDeclaration() {
        pluginCaller('fn2ReactClass', arguments);
      }
    }
  };
}
module.exports = exports['default'];