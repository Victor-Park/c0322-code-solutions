/* exported isVowel */
// Create new function isVowel with one parameter, char
// Lowercase char and assign value to new var lowercase
// If lowercased letter is a, e, i, o, or u
// Return true
// Else return false

function isVowel(char) {
  var lowercase = char.toLowerCase();
  if (lowercase === 'a' || lowercase === 'e' || lowercase === 'i' || lowercase === 'o' || lowercase === 'u') {
    return true;
  } else {
    return false;
  }
}
