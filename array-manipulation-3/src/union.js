/* exported union */
// create new function union with 2 parameters, first array and second array
// loop through first array and push all values into newArr
// loop through second array and
// if first array includes second[i]
// push second[i] into newArr
// return newArr

function union(first, second) {
  var newArr = [];
  for (var j = 0; j < first.length; j++) {
    newArr.push(first[j]);
  }
  for (var i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
