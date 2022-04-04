/* exported getWords */
function getWords(string) {
  var split = string.split(' ');
  var empty = ('');
  if (string !== empty) {
    return split;
  } else {
    return [];
  }
}
