/* exported chunk */
// create new function chunk with 2 parameters, array and size
// create empty array newArray
// loop through array and slice from index to index + size
// push into newArray

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    newArray.push(chunk);
  }
  return newArray;
}
