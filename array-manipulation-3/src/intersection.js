/* exported intersection */
// create new function intersection with 2 parameters, first array and second array
// assign empty array to newArr
// loop through first array and
// if second array includes first[i]
// push first[i] into newArr
// return newArr

function intersection(first, second) {
  var newArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArr.push(first[i]);
    }
  }
  return newArr;
}
