/* exported isUpperCased */
// Create new function isUpperCased with one parameter, word
// If word === uppercased word
// Return true
// Else return false

function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
