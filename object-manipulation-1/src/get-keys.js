/* exported getKeys */
// Create new function getKeys with one parameter, object
// Assign empty array to new var newArray
// FOR IN LOOP:
// for var key in object
// push key string into newArray
// Return newArray

function getKeys(object) {
  var newArray = [];
  for (var key in object) {
    newArray.push(key);
  }
  return newArray;
}
