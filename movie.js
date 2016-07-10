$(document).ready(function(){


  $.get('http://www.omdbapi.com/?t=oldboy&y=&plot=short&r=json')
  .then(function(data){

    console.log(data);
    $('body').append('<div id="1"></div>');

    $('#1').append('<img src='+ data.Poster +'>');
    $('#1').append('<h1>'+data.Title+'</h1>');
    $('#1').append('<p>'+data.Plot+'</p>');
  })
  .catch(function(){
    console.log('Error');
  });

  $.get('http://www.omdbapi.com/?t=kung+fu+hustle&y=&plot=short&r=json')
  .then(function(data){

    console.log(data);
    $('body').append('<div id="2"></div>');

    $('#2').append('<img src='+ data.Poster +'>');
    $('#2').append('<h1>'+data.Title+'</h1>');
    $('#2').append('<p>'+data.Plot+'</p>');
  })
  .catch(function(){
    console.log('Error');
  });

  $.get('http://www.omdbapi.com/?t=kill+bill&y=&plot=short&r=json')
  .then(function(data){

    console.log(data);
    $('body').append('<div id="3"></div>');

    $('#3').append('<img src='+ data.Poster +'>');
    $('#3').append('<h1>'+data.Title+'</h1>');
    $('#3').append('<p>'+data.Plot+'</p>');
  })
  .catch(function(){
    console.log('Error');
  });


});
