/* exported invert */
// create new function invert with 1 parameter, source
// create empty object
// for key in source
// assign source[key] to new var value
// obj[value] = key
// return obj

function invert(source) {
  var newObj = {};
  for (var key in source) {
    var value = source[key];
    newObj[value] = key;
  }
  return newObj;
}
