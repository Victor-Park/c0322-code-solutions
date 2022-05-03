/* exported reverseWords */
// create new function reverseWords with 1 parameter, string
// split the string into an array with words
// loop through the array and
// split each word at array(index)
// reverse each word
// join each word
// join array into single sting

function reverseWords(string) {
  var splitString = string.split(' ');
  var newArr = [];
  for (var i = 0; i < splitString.length; i++) {
    newArr.push(splitString[i].split('').reverse().join(''));
  }
  return newArr.join(' ');
}
