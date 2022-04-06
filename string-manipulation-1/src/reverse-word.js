/* exported reverseWord */
// Create new function reverseWord with one paramter, word
// Assign empty string to new var newWord
// FOR LOOP: initialize by assigning word length less one to var i
// Break loop when i >= 0
// Decrement i by 1
// Add last letter first to the empty string
// Return newWord

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}
