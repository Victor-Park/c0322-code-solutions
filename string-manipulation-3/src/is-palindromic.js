/* exported isPalindromic */
// create new function isPalindromic with 1 parameter, string
// split the string
// reverse the array
// join the array into string
// if newString === string, return true
// else, return false

function isPalindromic(string) {
  var splitArray = string.split('');
  var reversedArray = splitArray.reverse();
  var newString = reversedArray.join('');
  if (string.split(' ').join('') === newString.split(' ').join('')) {
    return true;
  } else {
    return false;
  }
}
