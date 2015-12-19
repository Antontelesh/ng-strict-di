'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchUnnamedResource = patchUnnamedResource;

var _ensureInject = require('./ensureInject');

function patchUnnamedResource(resource) {
  if (!resource) return;
  return function (ctor) {
    (0, _ensureInject.ensureInject)(ctor);
    return resource.apply(this, arguments);
  };
}