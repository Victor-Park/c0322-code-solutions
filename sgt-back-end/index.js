const express = require('express');
const app = express();
const middleware = express.json();
app.use(middleware);
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1 returning *
     `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).json({
          message: 'successfully deleted'
        });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  const input = [req.body.course, req.body.name, req.body.score, gradeId];
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be an integer between 0 and 100'
    });
    return;
  } else if (input.length < 4) {
    res.status(400).json({
      error: 'invalid input: missing 1 or more values'
    });
    return;
  }
  const sql = `
  update "grades"
  set "name" = $1,
      "course" = $2,
      "score" = $3
  where "gradeId" = $4 returning *
  `;
  db.query(sql, input)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(201).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  const input = [req.body.name, req.body.course, req.body.score];
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be an integer between 0 and 100'
    });
    return;
  } else if (input.length < 3) {
    res.status(400).json({
      error: 'invalid input: missing 1 or more values'
    });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3) returning *
  `;
  db.query(sql, input)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
     from  "grades"
     `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
    });
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
     from  "grades"
     where "gradeId" = $1
     `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
});
