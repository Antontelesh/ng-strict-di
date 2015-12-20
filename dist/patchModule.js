'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchModule = patchModule;

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _patchNamedResource = require('./patchNamedResource');

var _patchUnnamedResource = require('./patchUnnamedResource');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAMED_RESOURCES = ['animation', 'controller', 'directive', 'factory', 'filter', 'provider', 'service'];

var UNNAMED_RESOURCES = ['config', 'run'];

function patchModule(module) {
  return function () {
    var instance = module.apply(undefined, arguments);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(NAMED_RESOURCES), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var resource = _step.value;

        instance[resource] = (0, _patchNamedResource.patchNamedResource)(instance[resource]);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator3.default)(UNNAMED_RESOURCES), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var resource = _step2.value;

        instance[resource] = (0, _patchUnnamedResource.patchUnnamedResource)(instance[resource]);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return instance;
  };
}