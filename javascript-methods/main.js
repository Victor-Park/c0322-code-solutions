/* The Math object */
var a = 5;
var b = 12;
var c = 2;
var maximumValue = Math.max(a, b, c);
console.log('Maximum Value Result', maximumValue);
var heroes = ['superman', 'batman', 'spiderman', 'iron man'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index Result', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Random Hero Result', randomHero);
/* Array Methods */
var library = [
  {
    title: null,
    author: null
  },
  {
    title: null,
    author: null
  },
  {
    title: null,
    author: null
  }
];
var lastBook = library.pop();
console.log('lastBook result', lastBook);
var firstBook = library.shift();
console.log('firstBook result', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library result', library);

/* String Methods */
var fullName = 'Victor Park';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName result', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName result', sayMyName);
