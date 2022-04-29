/* exported isAnagram */
// create new function isAnagram with 2 parameters, firstString and secondString
// split each string and store them in an array
// sort each array in alphabetical order
// if firstString.sort() === secondString.sort(), return true
// else return false

function isAnagram(firstString, secondString) {
  var splitString1 = firstString.split('').sort().join('');
  var splitString2 = secondString.split('').sort().join('');
  if (splitString1.split(' ').join('') === splitString2.split(' ').join('')) {
    return true;
  } else {
    return false;
  }
}
