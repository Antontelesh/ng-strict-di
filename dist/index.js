'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ngStrictDI = ngStrictDI;

var _patchModule = require('./patchModule');

var _config = require('./config');

function ngStrictDI(angular) {
  var module_name = 'ngStrictDI';

  angular.module = (0, _patchModule.patchModule)(angular.module);
  angular.module(module_name, []).config(_config.config);

  return module_name;
}