/* exported getValues */
function getValues(object) {
  var newArray = [];
  for (var i = 0 in object) {
    newArray.push(object[i]);
  }
  return newArray;
}
