
$(document).ready(function(){

  //generates a random # 0-1, times 101, then rounds down.
  var numToGuess = Math.floor(Math.random() * 101);
  var guessCount = 0;
  console.log(numToGuess);
 

//click button to get user input
$("#guessButton").click(function(event){
  event.preventDefault();
  var userGs = $("#userGuess").val();
  evaluateGuess(userGs);
});


//validate user input, if true append, if false alert
  function evaluateGuess(num){//had a num placeholder and num said was undefined?
    if(parseInt(num) && 100 >= num >= 1){
      $("#guessList").append("<li>" + num + "</li>");
      $("#userGuess").val("");//clears the field
      compare(num);
      guessCount++;
      $("#count").text(guessCount);
      }
    else{
      alert("Please enter a number between 1-100");//this deletes the appended guessed numbers I think
    }
  }


  //computes difference between random number and guessed number, returns feedback
  function compare (userGs){
    var difference = Math.abs(userGs - numToGuess);
   if(userGs == numToGuess){
    $("#feedback").text("CORRECT!");
  }
   else if(difference <= 5 ){
    $("#feedback").text("very hot!");
  }
  else if(difference <= 10 ){
    $("#feedback").text("a bit hot!");
  }
  else if(difference <= 15 ){
    $("#feedback").text("warm!");
  }
  else if(difference <= 20 ){
    $("#feedback").text("cold!");
  }
  else{
    $("#feedback").text("nope");
    }
  }

// reset game
$(".new").click(function(){
  $("#guessList").empty();
  $("#feedback").text("Make your Guess!");
  guessCount = 0;
  $("#count").text(guessCount);
  numToGuess = Math.floor(Math.random() * 101);
  console.log(numToGuess);
});






	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});






});