/* exported take */
// create new function take with 2 parameters, array and count
// slice array from 0 to count and store in newArray
// return newArray

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
