var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p1sc = document.querySelector('#p1sc');
var p2sc = document.querySelector('#p2sc');
var reset = document.querySelector('#reset');
var til = document.querySelector('#til');
var numInput = document.querySelector('input');
var gameOver = false;
var winningScore = 5;
var p1score = 0;
var p2score = 0;

p1.addEventListener('click', function() {
  if (!gameOver) {
    p1score++;
    if (p1score == winningScore) {
      p1sc.classList.add('winner');
      p1sc.textContent = p1score;
      alert('GAME OVER \n press reset to play again');
    }
    p1sc.textContent = p1score;
  }
});

p2.addEventListener('click', function() {
  if (!gameOver) {
    p2score++;
    if (p2score == winningScore) {
      p2sc.classList.add('winner');
      p2sc.textContent = p2score;
      alert('GAME OVER \n press reset to play again');
    }
    p2sc.textContent = p2score;
  }
});

var resetf = function() {
  p1score = 0;
  p2score = 0;
  p1sc.textContent = 0;
  p2sc.textContent = 0;
  p1sc.classList.remove('winner');
  p2sc.classList.remove('winner');
  gameOver = false;
}

reset.addEventListener('click', function() {
  resetf();
});

numInput.addEventListener('change', function() {
  winningScore = this.value;
  til.textContent = this.value;
  resetf();
});
