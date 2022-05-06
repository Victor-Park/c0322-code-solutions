const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('some string');
});

app.listen(3000, () => {
});
