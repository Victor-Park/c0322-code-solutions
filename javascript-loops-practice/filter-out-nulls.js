/* exported filterOutNulls */

// create empty array
// loop through the values array
// check if values[i] is not null
// if not null, push into new/empty array

function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  } return newArray;
}
