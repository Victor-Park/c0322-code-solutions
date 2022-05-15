const express = require('express');
const app = express();
const fs = require('fs');
const middleware = express.json();
app.use(middleware);
const data = require('./data.json');
var notes = data.notes;

// Clients can replace a note (PUT) by id
app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const newNote = req.body;
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({
      error: 'ID must be a postive integer'
    });
  } else if (!notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
  } else if (!newNote.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else {
    notes[id] = newNote;
    newNote.id = id;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({
          error: 'an unexpected error occurred'
        });
      } else {
        res.status(200).json(notes[id]);
      }
    });
  }
});

// Clients can DELETE a note by id
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({
      error: 'ID required to be a postive integer'
    });
  } else if (!notes[id]) {
    res.status(404).json({
      error: 'matching ID not found'
    });
  } else {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({
          error: 'an unexpected error occurred'
        });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

// Clients can POST a new note.
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  if (newNote.content) {
    var nextId = data.nextId;
    const id = nextId;
    newNote.id = id;
    notes[id] = newNote;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({
          error: 'an unexpected error occurred'
        });
      } else {
        res.status(201).json(newNote);
      }
    });
  } else if (!newNote.content) {
    res.status(400).json({ error: 'content is a required field' });
  }
});

// clients can GET a list of notes.
app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const key in notes) {
    arr.push(notes[key]);
  }
  res.json(arr);
});

// Clients can GET a single note by id
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (notes[id]) {
    res.status(200).send(data.notes[id]);
  } else if (!notes[id]) {
    res.status(404).send({ error: `cannot find note with id ${id}` });
  }
});

// listen method
app.listen(3000, (req, res) => {
});
