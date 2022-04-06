/* exported getValues */
// Create new function getValues with one parameter, object
// Assign empty array to new var newArray
// FOR IN LOOP
// for var i = 0 in object
// push value of object at index i into newArray
// Return newArray

function getValues(object) {
  var newArray = [];
  for (var i = 0 in object) {
    newArray.push(object[i]);
  }
  return newArray;
}
