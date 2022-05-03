/* exported getStudentNames */
// create getStudentNames function with students (array) as parameter
// assign empty array to new variable names
// create a for loop to loop through the array and pull property values
// push property values into empty array var names

function getStudentNames(students) {
  var name = [];
  for (let i = 0; i < students.length; i++) {
    name.push(students[i].name);
  }
  return name;
}
