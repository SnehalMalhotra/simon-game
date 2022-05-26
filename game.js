var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber;
var randomChosenColor;
var gameStart = false;
var level = 0;
var userChosenColour;

$(document).keypress(function(event) {
  if (gameStart === false) {
    newSequence();
    gameStart = true;
    $("h1").text("Level 0");

  }


});

function newSequence() {
  randomNumber = Math.random();
  randomNumber *= 4;

  console.log(randomNumber = Math.floor(randomNumber));

  console.log(randomChosenColor = buttonColors[randomNumber]);
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  $("h1").text("Level " + level++);

  //animatePress(randomChosenColor);
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

  makeSound(randomChosenColor);
}


  $("div .btn").on("click", function() {
    userChosenColour = this.id;
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    //animatePress(userChosenColour);
    makeSound(userChosenColour);
    pressAnimation(userChosenColour);
    checkUser(userClickedPattern.length-1);
  });


// function animatePress(buttonAnimation){
//   $("#" + buttonAnimation).fadeOut(100).fadeIn(100);
// }

function pressAnimation(currentColour) {
  $("." + currentColour).addClass("pressed");

  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);

}

function makeSound(buttonColor) {
  switch (buttonColor) {
    case "green":
      var greenAudio = new Audio("sounds/green.mp3");
      greenAudio.play();
      break;
    case "blue":
      var blueAudio = new Audio("sounds/blue.mp3");
      blueAudio.play();
      break;
    case "red":
      var redAudio = new Audio("sounds/red.mp3");
      redAudio.play();
      break;
    case "yellow":
      var yellowAudio = new Audio("sounds/yellow.mp3");
      yellowAudio.play();
      break;
    default:

  }
}

function checkUser(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        newSequence();
        userClickedPattern = [];
      }, 1000);
    }
  } else {
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }


}
function startOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  gameStart=false;

}
