const fs = require('fs');
var input = process.argv[2];

fs.readFile(input, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
