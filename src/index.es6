import {patchModule} from './patchModule';

export function patch (angular) {
  angular.module = patchModule(angular.module);
}
