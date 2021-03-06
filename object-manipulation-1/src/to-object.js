/* exported toObject */
// Create new function toObject with parameter keyValuePair (array)
// Assign empty object to new var obj
// FOR LOOP:
// Initialize i=0
// Break when counter reaches keyValuePair array length
// Increment counter by 1
// Assign keyValuePair at index i+1 (value) to keyValuePair at index i (key), and push into empty object var obj
// Return var obj

function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
