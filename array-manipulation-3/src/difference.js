/* exported difference */
// create new function difference with 2 parameters, first array and second array
// assign empty array to new var
// loop through first array and
// if second array !includes first array at index i
// push first[i] into newArr
// loop through second array and
// if first array !includes first array at index i
// push second[i] into newArr
// return newArr

function difference(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      newArr.push(second[j]);
    }
  }
  return newArr;
}
