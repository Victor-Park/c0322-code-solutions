/* exported numVowels */
// create new function numVowels with 1 parameter, string
// lowercase string
// create empty variable vowelCount
// loop through string and increase count if charAt(index) === a, e, i, o, u
// return vowelCount

function numVowels(string) {
  var newString = string.toLowerCase();
  var vowelCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (newString.charAt(i) === 'a' || newString.charAt(i) === 'e' || newString.charAt(i) === 'i' || newString.charAt(i) === 'o' || newString.charAt(i) === 'u') {
      vowelCount++;
    }
  } return vowelCount;
}
