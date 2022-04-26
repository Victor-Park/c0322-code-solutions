/* exported truncate */
// create new function truncate with 2 parameters, length and string
// if length < string.length,
// substring at index length and concatenate '...'
// else string + '...'

function truncate(length, string) {
  if (length < string.length) {
    return string.substr(0, length) + '...';
  } else {
    return string + '...';
  }
}
