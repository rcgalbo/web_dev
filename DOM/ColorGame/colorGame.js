var colors = [];
var pickedColor;
var numSquares = 6;
var h1 = document.querySelector('h1');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');
var squares = document.querySelectorAll('.square');

init();

resetButton.addEventListener('click', function() {
  reset();
});

//********functions************
function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setUpSquares(){
  for (var i = 0; i < squares.length; i++) {
    //add event handler
    squares[i].addEventListener('click', function() {
      var clickedColor = this.style.backgroundColor;
      //compare to picked color
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'correct';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play Again?';
      } else {
        messageDisplay.textContent = 'try again';
        this.style.backgroundColor = '#232323';
      }
    });
  }
}

function reset() {
//reset buttons - pick new colors
  //pick a new random color array
  colors = generateColors(numSquares);
  pickedColor = pickColor(colors);
  colorDisplay.textContent = pickedColor;
  loadNewColors(colors);
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Colors';
  messageDisplay.textContent = '';
}

function changeColors(color) {
//change colors
  //loop through the squares
  for (var i = 0; i < numSquares; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function generateColors(num) {
//generate random colors
  //make array
  var arr = [];
  //add num random colors
  for (var i = 0; i < num; i++) {
    //get random color -> push to array
    arr.push(getRandomColor());
  }
  //return array
  return arr;
}

function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function loadNewColors(colors) {
  for (var i = 0; i < squares.length; i++) {
    //add initial colors
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
}

function pickColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
