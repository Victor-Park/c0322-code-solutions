// readfile note.txt
// copy note.txt into new file copy-of-note.txt

const fs = require('fs');
const origin = process.argv[2];
const destination = process.argv[3];

fs.readFile(origin, 'utf-8', (err, data) => {
  if (err) throw err;
  fs.writeFile(destination, data, err => {
    if (err) throw err;
  });
});
