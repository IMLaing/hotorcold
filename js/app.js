
$(document).ready(function(){
	'use strict';
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

// submit a guess (WORKING)
var $gameAnswer = '';
var $totalGuess = 0;
var $previousGuess = null;

var setGuessCount = function (totalGuess){
document.getElementById('count').innerHTML = totalGuess;
$totalGuess = totalGuess;
};

var newGame = function(){
	$gameAnswer = Math.floor(Math.random()*100)+1;
	console.log($gameAnswer);
	//clear all other contents
	$('#guessList li').remove();
	setGuessCount(0);
  guessTemperature('Make your Guess!');
  $previousGuess = null;
};

var guessTemperature = function(temp){
	document.getElementById('feedback').innerHTML = temp;
};


$("a.new").click(function(){
  		newGame();
  	});

var guessMade = function($userGuess){
  if ($userGuess == $gameAnswer) {
    console.log('match on answer');
    document.getElementById('feedback').innerHTML = "!!!winner!!!";
  } else {
    console.log('no match on answer');
    $('#guessList').append("<li>" + $userGuess + "</li>");
    $totalGuess++;
    console.log($totalGuess);
    setGuessCount($totalGuess); //adds one to guess total and then modifies innerHTML REMEMBER NO # WHEN USING getElementById('')
    if($userGuess > $gameAnswer + 10 || $userGuess < $gameAnswer - 10){
      console.log('cold!');
      guessTemperature('cold!');
    } else {
      console.log('hot!');
      guessTemperature('hot!');
    }
  }
};

var guessHottness = function($userGuess){
  if ($previousGuess){
    if (Math.abs($userGuess - $gameAnswer) < Math.abs($previousGuess - $gameAnswer)){
      console.log('hotter');
      guessTemperature('hotter');
    } else {
      console.log('colder');
      guessTemperature('colder');
    }
  }
};

$('form').submit(function(event) {
    event.preventDefault();
    var $userGuess = $('#userGuess').val();
    if (isNaN($userGuess)) {
      console.log('alert trigged because no input to $userGuess');
      alert('This is not a number');
    } else if($userGuess > 100 || $userGuess < 1){
    	console.log(' $userGuess is outside the parameters of the game');
    	alert('the number must be between 1-100');
    } else { 
      console.log('made a guess');      
      guessMade($userGuess);
    }
    console.log('clear submit field');
    $('#userGuess').val('');
    guessHottness($userGuess);
    $previousGuess = $userGuess;    
    console.log($previousGuess);
  });


newGame();

