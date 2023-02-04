//cache elements to change color
let containerEL = document.querySelector(".container");

//add event listeners to all the buttons
containerEL.addEventListener("click", handleclick);

// handle click paly - sound

function handleclick(e) {
  let id = e.target.id;
  let soundEl = new Audio(`../sounds/${e.target.id}.wav`);
  console.log(e.target.id);
  soundEl.volume = 0.25;
  soundEl.play();
}

// select and add listner to container
// when you click a target . the targets id is copied and sound is gien that id .mp3 to play
//or import, use the if condition to match song to id (longer version)
