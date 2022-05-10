/* exported defaults */
// create new function defaults with 2 parameters, target and source
// loop through source
// if source.key doesn't exist in target
// add key value pair to target

function defaults(target, source) {
  var sourceKey = Object.keys(source);
  for (var i = 0; i < sourceKey.length; i++) {
    var currentKey = sourceKey[i];
    if (target[currentKey] === undefined) {
      target[currentKey] = source[currentKey];
    }
  }
}
