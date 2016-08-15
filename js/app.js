
$(document).ready(function(){

  //generates a random # 0-1, times 101, then rounds down.
  var numToGuess = Math.floor(Math.random() * 101);
//	var userGs = $("#userGuess").val(); REMOVE! there is no value here when the page loads!

  //function userGs(){
   // $("#userGuess").val();
 // }
  

//click button to get user input

$("#guessButton").click(function(){
  var userGs = $("#userGuess").val();

//validate user input, if true append, if false alert
  function evaluateGuess(num){
    if(parseInt(num) && 100 >= num >= 1)
      
      {
      $("#guessList").append("<li>" + num + "</li>");
   $("#userGuess").val("");//need explanation on this code, copied from my other code
      }
    
    else{
      alert("Please enter a number between 1-100");//this deletes the appended guessed numbers I think
    }
  }
  evaluateGuess(userGs); 

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
  $("#feedback").text("close!");
}

else{
  $("#feedback").text("nope");
  }


//increments the guess count
var guessCount = 0;//this code only increments once when button  is clicked i think
function gc(num){
  num++;
  $("#count").text(num);
  
}
gc(guessCount);


});






	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//load page-new game starts
//press new game button to reset game
	//create newGame function to restart game

//track how many guesses(appaer in span#count default to 0 when page loads)


/*When your application starts, random value is generated in your global scope. 
That variable could be called randomNumber, numberToGuess e.g.

Since this variable is on the top of your file or to say in the global scope, 
other functions will be able to access it.

Now, what you do is you listen to what user inputs in the input field. 
After user enters his guess and presses the button, you take user value, 
substract it from the randomly generate number and that will be your reminder of how close
 or far he is from the actual number.

You will have bunch of if statements sending appropriate messages to the user
 e.g. if for example guess is less then 10 its warm, if its greater then 20 its cold etc. (whatever)

*/
});


