var todo = [];

var input = prompt('What woult you like to do');

while (input !== 'quit') {
  if (input === 'list') {
    var num_item = 1;
    console.log('*****************************');
    todo.forEach(function(todo_item) {
      console.log(num_item + '. ' + todo_item);
      num_item++;
    });
    console.log('*****************************');
  } else if (input === 'new') {
    var newTodo = prompt('Enter new todo');
    //add todo to list
    todo.push(newTodo);
  } else if (input === 'rm') {
    var index = prompt('What number would you like to remove?');
    index--;
    var removed_item = todo.pop(index);
    console.log('Removed: ' + removed_item);
  }
  input = prompt('What woult you like to do');
}
console.log('OK, have fun with your TODOs');
