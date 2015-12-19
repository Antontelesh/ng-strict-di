'use strict';

var _ensureInject = require('./ensureInject');

function patchNamedResource(resource) {
  if (!resource) return;
  return function (name, ctor) {
    (0, _ensureInject.ensureInject)(ctor);
    return resource(name, ctor);
  };
}