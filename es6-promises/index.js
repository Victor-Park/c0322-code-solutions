const takeAChance = require('./take-a-chance');
const promiseReturn = takeAChance('Victor');

promiseReturn.catch(error => {
  console.error(error.message);
});

promiseReturn.then(value => {
  console.log(value);
});
