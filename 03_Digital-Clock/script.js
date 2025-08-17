function updateClock() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "AM";

  // Convert to 12-hour format
  if (hours >= 12) {
    ampm = "PM";
  }
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 ko 12 bana do

  // Add leading zero if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").innerText = timeString;
}

// Update every second
setInterval(updateClock, 1000);

// Run immediately once
updateClock();
