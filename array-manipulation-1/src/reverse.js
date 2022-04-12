/* exported reverse */
// Create new function reverse with one parameter, array
// Assign empty array to new var newArray
// FOR LOOP: initialize by assigning array.length - 1 to i
// Break loop when i >= 0
// Decrement i by 1
// Push array at index i into newArray
// Return newArray

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
