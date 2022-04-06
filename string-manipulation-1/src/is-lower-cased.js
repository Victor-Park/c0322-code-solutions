/* exported isLowerCased */
// Create new function isLowerCased with one parameter, word
// If word === lowercased word
// Return true
// Else return false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
