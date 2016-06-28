
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
var gameAnswer = '';
var totalGuess = 0;

$('form').submit(function(event) {
    event.preventDefault();
    var $userGuess = $('#userGuess').val();
    if (isNaN($userGuess) || $userGuess == '') {
      console.log('alert trigged because no input to $userGuess');
      alert('This is not a number');
    } else if($userGuess > 100 || $userGuess < 1){
    	console.log(' $userGuess is outside the parameters of the game');
    	alert('the number must be between 1-100');
    } else { 
      console.log('made a guess');
      	if ($userGuess == gameAnswer) {
      		console.log('match on answer');
      		document.getElementById('feedback').innerHTML = "!!!winner!!!";
      	} else {
      		console.log('no match on answer');
      $('#guessList').append("<li>" + $userGuess + "</li>");
      totalGuess++;
      console.log(totalGuess);
      document.getElementById('count').innerHTML = totalGuess; //adds one to guess total and then modifies innerHTML REMEMBER NO # WHEN USING getElementById('')
  			if($userGuess > gameAnswer + 10 || $userGuess < gameAnswer - 10){
  				console.log('cold!');
  				document.getElementById('feedback').innerHTML = "cold!";
  			} else {
  				console.log('hot!');
  				document.getElementById('feedback').innerHTML = "hot!";
  			}
  		};
    };
    
    console.log('clear submit field');
    $('#userGuess').val('');
  
  });

var newGame = function(){
	gameAnswer = Math.floor(Math.random()*100)+1;
	console.log(gameAnswer);
};

newGame();