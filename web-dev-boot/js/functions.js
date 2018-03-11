// factorial
function factorial(x) {
  fact = 1;
  while (x > 0) {
    fact *= x;
    x--;
  }
  return fact;
}

//kebabToSnake
function kebabToSnake(str) {
  return str.replace('-', '_');
}

//print reverse
function printReverse(arry) {
  for (var i = arry.length; i >= 0; i--) {
    console.log(arry[i]);
  }
}

//isUniform
function isUniform(arry) {
  for (var i = 0; i < arry.len - 1; i++) {
    if (arry[i] !== arry[i + 1]) {
      return false;
    }
  }
  return true;
}

//sumArray
function sumArray(arry) {
  var sum = 0;
  arry.forEach(function(num) {
    sum += num;
  });
  return sum;
}

//max
function maxArray(arry) {
  var max = arry[0];
  arry.shift();
  arry.foreach(function(elm) {
    if (elm > max) {
      max = elm;
    }
  });
  return max;
}
