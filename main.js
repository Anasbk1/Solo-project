$(document).ready(function() {
  $('body').css({
    'background-image': 'linear-gradient(rgb(0, 0, 0), white)',
    'background': 'url("https://wallpapercave.com/wp/MJpQIqg.jpg")',
    'background-size': 'cover',
    'background-position': 'center',
    'overflow': 'hidden',
    'height': '100vh',
    'display': 'flex',
    'justify-content': 'center',
    'align-items': 'center'
  });

  $('#inp').change(function() {
    var input = $(this).val();
    $('ul').append('<li>' + input + '<i class="fa fa-skull"></i></li>');
    $(this).val('');

    $('li').css('text-decoration', 'line-through');

    setTimeout(function() {
     $('li').hide();
     $('#message').text(input + ' was Done').show();
  
     setTimeout(function() {
       $('#message').hide();
     }, 5000);
     }, 3000);

    var savedInputs = localStorage.getItem('inputs') ;
   
    savedInputs += input + ',';
    localStorage.setItem('inputs', savedInputs);
    
    var inputsArray = savedInputs.split(',');
    var deathsElement = $('#deaths');
    // deathsElement.empty();
    for (var i = 0; i < inputsArray.length; i++) {
     console.log();
      deathsElement.append(`<li>${inputsArray[i]}</li>`);
      
    }
    $('#btn').click(function() {
      localStorage.clear();
      $('#deaths').empty();
    })
  });
});