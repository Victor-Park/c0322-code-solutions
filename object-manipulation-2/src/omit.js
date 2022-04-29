/* exported omit */
// create new function omit with 2 parameters, source and keys
// create empty object
// for key in source
// if key !== keys
// assign key:value pair to empty object
// return object

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
