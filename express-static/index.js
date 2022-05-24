var express = require('express');
var app = express();
var path = require('path');

var publicPath = path.join(__dirname, ('public'));
var middleware = express.static(publicPath);
app.use(middleware);

app.listen(3000, () => {
  console.log('listening...');
});
