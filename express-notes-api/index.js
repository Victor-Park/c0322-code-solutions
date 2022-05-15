const express = require('express');
const app = express();
const fs = require('fs');
const middleware = express.json();
app.use(middleware);

fs.readFile('data.json', 'utf-8', (err, data) => {
  const Data = JSON.parse(data);
  var nextId = Data.nextId;
  var notes = Data.notes;
  //

  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    if (newNote.content) {
      const id = nextId++;
      newNote.id = id;
      notes[id] = newNote;
      fs.writeFile('data.json', JSON.stringify(newNote.content), err => {
        if (err) throw err;
        res.status(201).json(newNote);
      });
    } else if (!newNote.content) {
      res.status(400).json({ error: 'content is a required field' });
    }
  });

  app.get('/api/notes', (req, res) => {
    const arr = [];
    for (const key in notes) {
      arr.push(notes[key]);
    }
    res.json(arr);
  });
  //

  app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 0) {
      res.status(400).send({ error: 'id must be a positive integer' });
    } else if (notes[id]) {
      res.status(200).send(Data.notes[id]);
    } else if (!notes[id]) {
      res.status(404).send({ error: `cannot find note with id ${id}` });
    }
  });
  //

  if (err) throw err;
});

app.listen(3000, (req, res) => {
/*   console.log('listening...'); */
});
