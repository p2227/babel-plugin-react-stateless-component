'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = plugin;

var _fn2ReactClass = require('./fn2ReactClass');

var _fn2ReactClass2 = _interopRequireDefault(_fn2ReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(opts) {
  this.opts = opts;
  this.hasVisit = {};
  this.refs = {};
}

plugin.prototype.fn2ReactClass = _fn2ReactClass2.default;
module.exports = exports['default'];