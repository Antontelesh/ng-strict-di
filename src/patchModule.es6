import {patchNamedResource} from './patchNamedResource';
import {patchUnnamedResource} from './patchUnnamedResource';

const NAMED_RESOURCES = [
  'animation',
  'controller',
  'directive',
  'factory',
  'filter',
  'provider',
  'service'
];

const UNNAMED_RESOURCES = [
  'config',
  'run'
];


export function patchModule (module) {
  return function (...args) {
    var instance = module(...args);

    for (let resource of NAMED_RESOURCES) {
      instance[resource] = patchNamedResource(instance[resource]);
    }

    for (let resource of UNNAMED_RESOURCES) {
      instance[resource] = patchUnnamedResource(instance[resource]);
    }

    return instance;
  };
}
