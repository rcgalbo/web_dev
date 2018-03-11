var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

var campgrounds = [
  {
    name: 'Prairie Creek',
    image: 'https://source.unsplash.com/zv2tXjbDqg8',
  },
  {
    name: 'Salmon Hills',
    image: 'https://source.unsplash.com/66nFXzb0_oo',
  },
  {
    name: 'Twitter Arch',
    image: 'https://source.unsplash.com/gcCcIy6Fc_M',
  },
  {
    name: 'Prairie Creek',
    image: 'https://source.unsplash.com/j6MenunuSKg',
  },
  {
    name: 'Salmon Hills',
    image: 'https://source.unsplash.com/n3XTxxV7qhI',
  },
  {
    name: 'Prairie Creek',
    image: 'https://source.unsplash.com/hZB_dgU2sBc',
  },
  {
    name: 'Salmon Hills',
    image: 'https://source.unsplash.com/KYTT8L5JLDs',
  }
];

app.get('/', function(req, res) {
  res.render('landingPage');
});

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res) {
  // get data from form + add to campgrounds
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  // redirect to campgrounds page
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new.ejs');
});

app.listen(4000, function() {
  console.log('YelpCamp Serve Has Started');
});
