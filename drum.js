var numberofbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbuttons; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {

      var buttonHtlm = this.innerHTML;

      makesound(buttonHtlm);
      buttonAnimation(buttonHtlm);

    });
}


document.addEventListener("keydown",
  function(event) {
    makesound(event.key);
    buttonAnimation(event.key);
  });


function makesound(key) {

  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      Console.log(buttonHtlm);
  }
}


function buttonAnimation(keypressed)
{
var buttonanime = document.querySelector("."+ keypressed);

buttonanime.classList.add("pressed");

setTimeout(function() {
  buttonanime.classList.remove("pressed");
}, 100);

}







///Making every button click into one sound
// document.querySelectorAll(".drum")[i].addEventListener("click",
// function()
// {
//    var audio = new Audio("sounds/tom-1.mp3");
//    audio.play();
// });



/// Changing the selected buttoned to the color white
// document.querySelectorAll(".drum")[i].addEventListener("click",
// function()
// {
//    this.style.color = "white";
// });
