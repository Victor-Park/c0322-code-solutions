/* exported lastChars */
// create new function lastChars with 2 parameters, length and string
// slice string at string.length minus length
// if string.length is less than length, return original string
// else
// return new string

function lastChars(length, string) {
  var newString = string.slice(string.length - length);
  if (string.length < length) {
    return string;
  } else {
    return newString;
  }
}
