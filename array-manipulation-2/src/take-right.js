/* exported takeRight */
// create new function takeRight with 2 parameters, array and count
// if array.length < count
// return array
// else return sliced array at array.length minus count

function takeRight(array, count) {
  if (array.length < count) {
    return array;
  } else {
    return array.slice(array.length - count);
  }
}
