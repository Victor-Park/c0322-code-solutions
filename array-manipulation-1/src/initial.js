/* exported initial */
// Create new function initial with one parameter, array
// Assign empty array to new var newArray
// FOR LOOP: initialize by assigning 0 to i
// Break when i < array.length
// Increment i by 1
// Push array at index i into newArray
// Return newArray

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
