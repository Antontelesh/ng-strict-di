'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = config;

var _ensureInject = require('./ensureInject');

function controllerDecorator($delegate) {
  return function (ctor) {
    (0, _ensureInject.ensureInject)(ctor);
    return $delegate.apply(this, arguments);
  };
}

controllerDecorator.$inject = ['$delegate'];

function config($provide) {
  $provide.decorator('$controller', controllerDecorator);
}

config.$inject = ['$provide'];