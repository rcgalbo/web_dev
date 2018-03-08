// exercise 1
function echo(str, num_print){
  for(var i=0; i < num_print; i++){
    console.log(str);
  }
}

//echo("Echo!!!",10);
//echo("Tater Tots", 3);

// exercise 2

function average(arry){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var sum = arry.reduce(reducer);
  console.log(Math.round( sum / arry.length ));
}

average([0,1,2,3,4,5]);
