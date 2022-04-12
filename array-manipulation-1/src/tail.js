/* exported tail */
// Create new function tail with one parameter, array
// Assign empty array to new var newArray
// FOR LOOP: Initialize by assigning 1 to i
// Break loop when i < array.length
// Increment i by 1
// Push array at index i to newArray
// Return newArray

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
