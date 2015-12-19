export function ensureInject (ctor) {
  if (typeof ctor === 'function' && ctor.length && !ctor.$inject) {
    console.error('No $inject defined in', ctor);
  }
}
