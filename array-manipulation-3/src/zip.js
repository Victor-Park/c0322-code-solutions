/* exported zip */
// create new functino zip with 2 parametrs, first and second
// if first array is longer than second array then
// map second array and return first array at b index, a
// else map first array and return a, second array at b index
// return new arr

function zip(first, second) {
  if (first.length > second.length) {
    var zippedArr = second.map(function (a, b) {
      return [first[b], a];
    });
    return zippedArr;
  } else {
    var zippedArr1 = first.map(function (a, b) {
      return [a, second[b]];
    });
    return zippedArr1;
  }
}
