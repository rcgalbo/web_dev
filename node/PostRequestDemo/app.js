var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// use body parser for decoding body object
app.use(bodyParser.urlencoded({extended: true}));

// array of friends to push to
var friends = ["Henry", "Jack", "Andrew", "John", "Justin"];

app.get('/', function(req, res) {
  res.render('/home');
});

app.get('/friends', function(req, res) {
  res.render('/friends', {friends:friends});
});

app.post('/addfriend', function(req, res){
  var newfriend = req.body.newfriend;
  friends.push(newfriend);
  res.redirect('/friends');
});

app.listen(4000, function() {
  console.log('server is listening!!');
});
