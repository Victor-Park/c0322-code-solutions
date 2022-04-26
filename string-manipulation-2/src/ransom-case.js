/* exported ransomCase */
// create new function ransomCase with 1 parameter, string
// split string up into individual letters
// loop through string and change every i += 2 to uppercase
// join the letters into string and return

function ransomCase(string) {
  var lowercase = string.toLowerCase();
  var splitString = lowercase.split('');
  for (var i = 1; i < splitString.length; i += 2) {
    splitString[i] = splitString[i].toUpperCase();
  } return splitString.join('');
}
