function convertMinutesToSeconds(minutes) {
  var minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}

var minutesToSecondsResults = convertMinutesToSeconds(5);
console.log('minutesToSecondsResults', minutesToSecondsResults);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greeting = greet('Beavis');
console.log('greetingResults', greeting);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var area = getArea(17, 42);
console.log('getAreaResult', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({
  firstName: 'Lelouch',
  lastName: 'Lamprouge'
});

console.log('getFirstNameResult', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElementResult', lastElement);
