import fn2ReactClass from './fn2ReactClass';

export default function plugin(opts){
  this.opts = opts;
  this.hasVisit = {};
  this.refs = {};
}

plugin.prototype.fn2ReactClass = fn2ReactClass;