const startElement = document.getElementById("start");
const stopElement = document.getElementById("stop");
const resetElement = document.getElementById("reset");
const timerElement = document.getElementById("timer");

let interval;
let timeLeft = 1500;

function updateTimer() {
  let mins = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formatedTime = `${mins.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  timerElement.innerHTML = formatedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startElement.addEventListener("click", startTimer);
stopElement.addEventListener("click", stopTimer);
resetElement.addEventListener("click", resetTimer);
