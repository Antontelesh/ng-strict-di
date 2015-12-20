import {patchModule} from './patchModule';
import {config} from './config';

export function ngStrictDI(angular) {
  var module_name = 'ngStrictDI';

  angular.module = patchModule(angular.module);
  angular.module(module_name, [])
    .config(config);

  return module_name;
}
