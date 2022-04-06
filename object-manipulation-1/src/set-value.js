/* exported setValue */
// Create new function setValue with three parameters, object, key, and value
// Assign value to object at key property, and assign the result to new var $new
// return $new
function setValue(object, key, value) {
  var $new = object[key] = value;
  return $new;
}
