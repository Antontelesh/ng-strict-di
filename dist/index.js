'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patch = patch;

var _patchModule = require('./patchModule');

function patch(angular) {
  angular.module = (0, _patchModule.patchModule)(angular.module);
}