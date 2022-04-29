/* exported pick */
// create new function pick with 2 parameters, source and keys
// create empty object
// for key in source
// if keys include key
// store key:value pair in empty object
// return object

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
