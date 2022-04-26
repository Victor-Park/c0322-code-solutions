/* exported dropRight */
// create new functino dropRight with 2 parameters, array and count
// slice array from 0 to array.length - count
// return newArray

function dropRight(array, count) {
  var newArray = array.slice(0, array.length - count);
  return newArray;
}
