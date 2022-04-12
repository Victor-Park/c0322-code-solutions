/* exported getWords */
// Create new function getWords with one parameter, string
// Split string at ' ' and assign return to new var split
// Assign empty string to new var empty
// If string is not empty
// Return split
// Else return empty array

function getWords(string) {
  var split = string.split(' ');
  var empty = ('');
  if (string !== empty) {
    return split;
  } else {
    return [];
  }
}
