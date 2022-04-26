/* exported firstChars */
// create new function firstChars with 2 parameters, length and string
// slice string from zero to length
// return string

function firstChars(length, string) {
  var newString = string.slice(0, length);
  return newString;
}
