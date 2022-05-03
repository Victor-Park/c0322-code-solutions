/* exported includes */
// create new function includes with 2 parameters, array and value
// loop through array and if array[i] === value
// return true
// else return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}
