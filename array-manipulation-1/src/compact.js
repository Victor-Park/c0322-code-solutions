/* exported compact */
// Create new function compact with one parameter, array
// Assign empty array to new var newArray
// FOR LOOP: initialize by assigning 0 to i
// Break loop when i < array.length
// Increment i by 1
// If array at i returns truthy values
// Push array at i into newArray
// Return newArray

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  } return newArray;
}
