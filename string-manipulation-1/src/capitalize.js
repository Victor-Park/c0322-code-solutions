/* exported capitalize */
// Create new function capitalize with one parameter, word
// Call toLowerCase method of word object with no arguments and assign the result to new var lowercase
// Separate string from index 1 to the end using substring and and lowercase
// Uppercase the first letter
// Combine uppercased first letter to rest of the lowercased letters and assign value to new var cap
// Return cap

function capitalize(word) {
  var lowercase = word.toLowerCase();
  var cap = word.charAt(0).toUpperCase() + lowercase.substring(1, word.length);
  return cap;
}
