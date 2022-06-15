function graduate(credential) {
  return function (fullName) {
    return fullName + credential;
  };
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');

console.log(medicalSchool('Victor Park, '));
console.log(lawSchool('Victor Park, '));
