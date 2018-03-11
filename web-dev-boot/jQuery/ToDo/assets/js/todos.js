// check off todo by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// remove todos by clicking X
$('ul').on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

//add todo
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //create new li, add to ul
    var todoText = $(this).val();
    var todoElm =
      '<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>';
    $(this).val('');
    $('ul').append(todoElm);
  }
});

//make add todo input toggle
$('.fa-plus').click(function() {
  $("input[type='text']").fadeToggle();
});
