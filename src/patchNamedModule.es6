import {ensureInject} from './ensureInject';

function patchNamedResource(resource) {
  if (!resource) return;
  return function (name, ctor) {
    ensureInject(ctor);
    return resource(name, ctor);
  };
}
