/* exported flatten */
// create new function flatten with 1 parameter, array
// reduce array and concat to new arr
// return new arr

function flatten(array) {
  var newArr = array.reduce(function (a, b) {
    return a.concat(b);
  },
  []
  );
  return newArr;
}
