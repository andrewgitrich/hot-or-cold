
$(document).ready(function(){

  //generates a random # 0-1, times 101, then rounds down.
  var numToGuess = Math.floor(Math.random() * 101);
  var guessCount = 0;
  console.log(numToGuess);
 

//click button to get user input
$("#guessButton").click(function(){
  var userGs = $("#userGuess").val();
  evaluateGuess(userGs);
});


//validate user input, if true append, if false alert
  function evaluateGuess(userGs){//had a num placeholder and userGs said was undefined?
    if(parseInt(userGs) && 100 >= userGs >= 1){
      $("#guessList").append("<li>" + userGs + "</li>");
      $("#userGuess").val("");//need explanation on this code, copied from my other code?
      compare(userGs);
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
    $("#feedback").text("cold!");
  }
  else{
    $("#feedback").text("nope");
    }
  }










	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});






});