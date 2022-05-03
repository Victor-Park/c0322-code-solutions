/* exported drop */
// create new functino drop with 2 parameters, array and count
// slice array at count and assign to new var newArray
// return newArray

function drop(array, count) {
  var newArray = array.slice(count);
  return newArray;
}
