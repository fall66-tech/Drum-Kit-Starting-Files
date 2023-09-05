document.querySelectorAll("button").forEach((element1) => {
  element1.addEventListener("click", go);
});

function go() {
  var buttonInnerHTML = this.innerHTML;
  makesound(buttonInnerHTML);
  btnAnimation(buttonInnerHTML);
}

document.addEventListener("keydown",
function enterkey(event){
  makesound(event.key);
  btnAnimation(event.key);   //function call
}
);

function makesound(key) {
   switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
	case "j":
	  var audio = new Audio("sounds/crash.mp3");
	  audio.play();
    break;
	case "k":
		var audio = new Audio("sounds/kick-bass.mp3");
		audio.play();
      break;
  case "l":
		var audio = new Audio("sounds/snare.mp3");
			audio.play();
      break;
  }
}

function btnAnimation(currentKey) {
    var activebtn = document.querySelector("." + currentKey);
    activebtn.classList.add("pressed");

    setTimeout( () => {activebtn.classList.remove("pressed")}, 100)
}