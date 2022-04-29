/* exported defaults */
// create new function defaults with 2 parameters, target and source
// assign target to source
// reassign source back to target

function defaults(target, source) {
  Object.assign(source, target);
  Object.assign(target, source);
}
