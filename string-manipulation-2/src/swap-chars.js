/* exported swapChars */
// create new functino swapChars with 3 parameters, firstIndex, secondIndex and string
// assign string at firstIndex to new var firstLetter
// assign string at secondIndex to new var secondLetter
// split string
// assign secondLetter to splitString[firstIndex]
// assign firstLetter to splitString[secondIndex]
// join splitString
// return newString

function swapChars(firstIndex, secondIndex, string) {
  var firstLetter = string[firstIndex];
  var secondLetter = string[secondIndex];
  var splitString = string.split('');
  splitString[firstIndex] = secondLetter;
  splitString[secondIndex] = firstLetter;
  var newString = splitString.join('');
  return newString;
}
