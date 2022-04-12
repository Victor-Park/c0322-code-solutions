function ExampleConstructor() {
}

console.log('ExampleConstructor', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();

console.log('newExample', newExample);

var isit = newExample instanceof ExampleConstructor;

console.log('isit', isit);
