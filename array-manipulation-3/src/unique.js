/* exported unique */
// create new function unique with 1 parameter, array
// loop through the array and
// push array[i] into newArr if
// newArr !include array[i];
// return newArr

function unique(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
