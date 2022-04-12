var $array = [
  {
    name: 'Lord of the Rings',
    isbn: '123-5346456-666',
    author: 'J.R.R Tolkien'
  },
  {
    name: 'Harry Potter',
    isbn: '985-768594-103',
    author: 'J.K. Rowling'
  },
  {
    name: 'How to Not Die',
    isbn: '003-293857-847',
    author: 'No Clue'
  }
];
console.log('array type:', typeof $array, $array);
console.log('json stringify:', typeof JSON.stringify($array), JSON.stringify($array));
var student = '{"id":"1234", "name":"Victor"}';
console.log('json student:', typeof student, student);
var obj = JSON.parse(student);
console.log('json parse:', typeof obj, obj);
