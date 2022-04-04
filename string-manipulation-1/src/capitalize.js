/* exported capitalize */
function capitalize(word) {
  var lowercase = word.toLowerCase();
  var cap = lowercase.charAt(0).toUpperCase() + lowercase.substring(1, word.length);
  return cap;
}
