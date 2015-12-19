'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchNamedResource = patchNamedResource;

var _ensureInject = require('./ensureInject');

function patchNamedResource(resource) {
  if (!resource) return;
  return function (name, ctor) {
    (0, _ensureInject.ensureInject)(ctor);
    return resource.apply(this, arguments);
  };
}