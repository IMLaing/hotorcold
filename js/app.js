
$(document).ready(function(){
	
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

$('form').submit(function(event) {
    event.preventDefault();
    var $userGuess = $('#userGuess').val();
    if (isNaN($userGuess) || $userGuess == '') {
      console.log('alert trigged because no input to $userGuess');
      alert('This is not a number');
    } else {
      console.log('made a guess');
      $('#guessList').append("<li>" + $userGuess + "</li>");
    };
    console.log('clear submit field');
    $('#userGuess').val('');
  });

var newGame = function(){
	var gameAnswer = Math.floor(Math.random()*100)+1;
	console.log(gameAnswer);
};

newGame();