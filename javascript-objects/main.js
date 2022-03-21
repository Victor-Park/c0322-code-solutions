var student = {
  firstName: 'Victor',
  lastName: 'Park',
  age: '30'
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of student full name', fullName);

student.livesInIrvine = false;
student.PreviousOccupation = 'racer';

console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of student.PreviousOccupation', student.PreviousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'Porsche',
  model: 'GT3RS',
  year: 2021
};

vehicle['color'] = 'Red';
vehicle['isConvertible'] = false;

console.log('vehicle color', vehicle['color']);
console.log('is it convertible?', vehicle['isConvertible']);
console.log('vehicle', vehicle);

var pet = {
  name: 'jayda',
  type: 'pitbull'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
