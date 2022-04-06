/* exported setValue */
function setValue(object, key, value) {
  var $new = object[key] = value;
  return $new;
}
