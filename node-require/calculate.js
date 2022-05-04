const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const operator = process.argv[3];
const x = Number(process.argv[2]);
const y = Number(process.argv[4]);

function run() {
  if (operator === 'plus') {
    return add(x, y);
  } else if (operator === 'minus') {
    return subtract(x, y);
  } else if (operator === 'times') {
    return multiply(x, y);
  } else if (operator === 'over') {
    return divide(x, y);
  }
}

console.log('result:', run());
