var express = require('express'); //library creating web servers - listening ports, handling http connections
var morgan = require('morgan'); //library output logs of servers
var path = require('path'); //library

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {           // if this path /ui/style.css is requested (app.get) by web client, this function will execute
  res.sendFile(path.join(__dirname, 'ui', 'style.css')); // ui/style.css will be served
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
