//create secret number
var secretNumber = 4;
//ask user for guress
var guess = prompt("Guess a number");
//check guess 
if (Number( guess ) === secretNumber) { 
  alert("You got it right");
}

else { 
  alert("WRONG");
}
