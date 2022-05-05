const fs = require('fs');
var command = process.argv[2];

fs.readFile('data.json', 'utf-8', (err, data) => {
  data = JSON.parse(data);
  if (err) throw err;
  if (command === 'read') {
    for (const [key, value] of Object.entries(data.notes)) {
      console.log(key + ':', value);
    }
  }
  if (command === 'create') {
    var input = process.argv[3];
    var id = data.nextId;
    data.notes[id] = input;
    data.nextId = ++id;
    data = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
    });
  }
  if (command === 'update') {
    var target = process.argv[3];
    var text = process.argv[4];
    for (var key in data.notes) {
      if (key === target) {
        data.notes[key] = text;
        data = JSON.stringify(data, null, 2);
        fs.writeFile('data.json', data, err => {
          if (err) throw err;
        });
      }
    }
  }
  if (command === 'delete') {
    var target1 = process.argv[3];
    for (var key1 in data.notes) {
      if (key1 === target1) {
        console.log(true);
        delete data.notes[key1];
        data = JSON.stringify(data, null, 2);
        fs.writeFile('data.json', data, err => {
          if (err) throw err;
        });
      }
    }
  }
});
