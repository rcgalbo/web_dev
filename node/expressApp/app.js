var express = require('express');
var app = express();

// "/" -> "hi there"
app.get('/', function(req, res) {
  res.send('hi there, welcome to my assignment');
});

app.get('/speak/:animal', function(req, res) {
  var animal = req.params['animal'];
  var sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof',
  };
  res.send('The ' + animal + ' says ' + sounds[animal]);
});

app.get('/repeat/:word/:ntimes', function(req, res) {
  var word = req.params['word'];
  var n = req.params['ntimes'];
  var string = '';
  for (var i = 0; i < n; i++) {
    string = string + word + ' ';
  }
  res.send(string);
});

app.get('/*', function(req, res) {
  res.send('Page aint here man, what are you doin with your life?');
});

// listen to requests
app.listen(4000, function() {
  console.log('server has started');
});
