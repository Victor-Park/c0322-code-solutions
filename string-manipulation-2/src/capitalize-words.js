/* exported capitalizeWords */
// create new function capitalizeWords with 1 parameter, string
// split string by into individual words (split at ' ')
// toLowerCase every word
// Uppercase charAt(0) and slice(1)
// join array of words into string
// return new string

function capitalizeWords(string) {
  var lowercase = string.toLowerCase();
  var split = lowercase.split(' ');
  for (var i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
  }
  var newString = split.join(' ');
  return newString;
}
