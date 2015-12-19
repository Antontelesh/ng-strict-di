import {ensureInject} from './ensureInject';

export function patchUnnamedResource (resource) {
  if (!resource) return;
  return function (ctor) {
    ensureInject(ctor);
    return resource(ctor);
  };
}
