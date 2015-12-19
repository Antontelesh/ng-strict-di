'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureInject = ensureInject;
function ensureInject(ctor) {
  if (typeof ctor === 'function' && ctor.length && !ctor.$inject) {
    console.error('No $inject defined in', ctor);
  }
}