/* exported equal */
// create new function equal with 2 parameters, first and second
// convert array to JSON string and check if they're equal

function equal(first, second) {
  if (JSON.stringify(first) === JSON.stringify(second)) {
    return true;
  }
  if (JSON.stringify(first) !== JSON.stringify(second)) {
    return false;
  }
}
