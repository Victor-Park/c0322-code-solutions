/* exported capitalizeWord */
// create new function capitalizeWord with 1 parameter, word
// if lowercased word !== 'javascript'
// substring 1st letter and capitalize it
// + substring 2nd~last letter and lowercase
// concatenate
// else if === 'javascript'
// substring 1st letter and 5th letter and capitalize it
// + substring lowercase rest of the letters
// concatenate

function capitalizeWord(word) {
  var firstLetter = word.substring(0, 1);
  var rest = word.substring(1);
  var fifthLetter = word.substring(4, 5);
  if (word.toLowerCase() !== 'javascript') {
    return firstLetter.toUpperCase() + rest.toLowerCase();
  } else {
    return firstLetter.toUpperCase() + word.substring(1, 4).toLowerCase() + fifthLetter.toUpperCase() + word.substring(5).toLowerCase();
  }
}
