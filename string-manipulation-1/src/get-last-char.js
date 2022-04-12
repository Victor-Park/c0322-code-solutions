/* exported getLastChar */
// Create new function getLastChar with one parameter, string
// Call method charAt of string object with length of the string minus one as the argument, and assign result to new var lastChar
// Return lastChar

function getLastChar(string) {
  var lastChar = string.charAt(string.length - 1);
  return lastChar;
}
