import {ensureInject} from './ensureInject';

export function patchNamedResource(resource) {
  if (!resource) return;
  return function (name, ctor) {
    ensureInject(ctor);
    return resource.apply(this, arguments);
  };
}
