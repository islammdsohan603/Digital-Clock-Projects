// 🕒 Digital Clock with Start/Stop Controls
// ----------------------------------------

let timer; // interval ID

function countTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let session = "AM";
  if (hours >= 12) session = "PM";

  if (hours === 0) hours = 12;
  else if (hours > 12) hours -= 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds} ${session}`;
}

function updateDateTime() {
  const now = new Date();
  document.getElementById("time").innerText = countTime();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[now.getDay()];

  let month = now.getMonth() + 1;
  let date = now.getDate();
  const year = now.getFullYear();

  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;

  document.getElementById("date").innerText = `${dayName}, ${year}-${month}-${date}`;
}

function startClock() {
  if (!timer) {
    timer = setInterval(updateDateTime, 1000);
    updateDateTime();
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
  }
}


function stopClock() {
  clearInterval(timer);
  timer = null;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
}

document.getElementById("startBtn").addEventListener("click", startClock);
document.getElementById("stopBtn").addEventListener("click", stopClock);

// Start clock automatically when page loads
startClock();

