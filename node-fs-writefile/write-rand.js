const fs = require('fs');

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

var randomOf100 = randomNumber(100).toString() + '\n';

fs.writeFile('random.txt', randomOf100, err => {
  if (err) throw err;
});
