var express = require('express');
var app = express();

// add public folder for styles
app.use(express.static('public'));
app.set("view engine", "ejs");


app.get('/', function(req, res) {
  res.render('home');
});

app.get('/inlovewith/:thing', function(req, res){
  var thing = req.params.thing;
  res.render('love', {thingvar:thing});
});

app.get('/posts', function(req, res){
  var posts = [
    {title: 'this is that fonk', author:'rgalbo'},
    {title: 'this is that donk', author:'rgalbo'},
    {title: 'this is that jonk', author:'rgalbo'}
  ];

  res.render('posts', {posts:posts});
});

app.listen(4000, function() {
  console.log('server is listening!!');
});
