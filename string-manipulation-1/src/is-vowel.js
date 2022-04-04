/* exported isVowel */
function isVowel(char) {
  var lowercase = char.toLowerCase();
  if (lowercase === 'a' || lowercase === 'e' || lowercase === 'i' || lowercase === 'o' || lowercase === 'u') {
    return true;
  } else {
    return false;
  }
}
