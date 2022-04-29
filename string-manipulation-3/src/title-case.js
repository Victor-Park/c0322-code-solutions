/* exported titleCase */
// create new function titleCase with 1 parameter, title
// lowercase every letter
// split string into an array with words
// loop through array.length
// if word === api, uppercase all letters
// if word length is 3 but does not equal 'the', 'for', or 'and', cap first letter
// if word length is > 3, cap first letter
// unless word is Javascript, then cap first letter AND 'S'
// if word length is 1 but === 'i', cap letter
// if word includes ':', then cap first letter of the next word
// if word includes '-', then cap the following letter

function titleCase(title) {
  var wordArr = title.toLowerCase().split(' ');
  wordArr[0] = wordArr[0].charAt(0).toUpperCase() + wordArr[0].substring(1);
  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === 'api') {
      wordArr[i] = wordArr[i].toUpperCase();
    }
    if (wordArr[i] !== 'the' && wordArr[i] !== 'for' && wordArr[i] !== 'and' && wordArr[i].length === 3) {
      wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].substring(1);
    }
    if (wordArr[i].length > 3) {
      if (wordArr[i].includes('avascript')) {
        wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].substring(1, 4) + wordArr[i].charAt(4).toUpperCase() + wordArr[i].substring(5);
      } else {
        wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].substring(1);
      }
    }
    if (wordArr[i] === 'i') {
      wordArr[i] = wordArr[i].toUpperCase();
    }
    if (wordArr[i].includes(':')) {
      wordArr[i + 1] = wordArr[i + 1].charAt(0).toUpperCase() + wordArr[i + 1].substring(1);
    }
    if (wordArr[i].includes('-')) {
      var index = wordArr[i].indexOf('-');
      wordArr[i] = wordArr[i].substring(0, index + 1) + wordArr[i][index + 1].toUpperCase() + wordArr[i].substring(index + 2);

    }
  }
  var string = wordArr.join(' ');
  return string;
}
