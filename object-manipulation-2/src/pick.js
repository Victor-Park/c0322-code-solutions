/* exported pick */
// create new function pick with 2 parameters, source and keys
// for in loop

function pick(source, keys) {
  var newObj = {};
  for (var prop in source) {
    if (keys.includes(prop)) {
      if (source[prop] !== undefined) {
        newObj[prop] = source[prop];
      }
    }
  }
  return newObj;
}
