let progress = document.querySelector(".progress");
let song = document.querySelector(".song");
let control = document.querySelector(".ctrl");
let replay = document.querySelector(".replay");
const forwardButton = document.getElementById("forward-button");
const backwardButton = document.getElementById("backward-button");

replay.addEventListener("click", replaySong);
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (control.classList.contains("fa-pause")) {
    song.pause();
    control.classList.remove("fa-pause");
    control.classList.add("fa-play");
    
  } else {
    song.play();
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
  }
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = () => {
  song.play();
  song.currentTime = progress.value;
  control.classList.add("fa-pause");
  control.classList.remove("fa-play");

};
function togglePlayButton(show) {
    if (show) {
      control.style.display = "block";
    } else {
      control.style.display = "none";
    }
  }

replay.addEventListener("click", replaySong);
function replaySong() {
  song.pause();
  song.currentTime = 0;
  song.play();
  control.classList.remove("fa-play");
  control.classList.add("fa-pause");
  replay.style.display = "none";
  togglePlayButton(true);
}

song.addEventListener("ended", () => {
  replay.style.display = "block";
  togglePlayButton(false);
});

forwardButton.addEventListener("click", skipForward);
backwardButton.addEventListener("click", skipBackward);


function skipForward() {
  if (song.currentTime + 10 < song.duration) {
    song.currentTime += 10;
  }
}

function skipBackward() {
  if (song.currentTime - 10 >= 0) {
    song.currentTime -= 10;
  } else {
    song.currentTime = 0; 
  }
}