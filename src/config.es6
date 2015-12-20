import {ensureInject} from './ensureInject';

function controllerDecorator($delegate) {
  return function (ctor) {
    ensureInject(ctor);
    return $delegate.apply(this, arguments);
  };
}

controllerDecorator.$inject = ['$delegate'];

export function config($provide) {
  $provide.decorator('$controller', controllerDecorator);
}

config.$inject = ['$provide'];
