const targetDateSeconds = Math.floor(
  new Date("December 25, 2021 00:00:00").getTime() / 1000
);

let intervalID = setInterval(() => {
  const nowSeconds = Math.floor(new Date().getTime() / 1000);
  let distance = targetDateSeconds - nowSeconds;

  const daySecs = 60 * 60 * 24;
  const hourSecs = 60 * 60;

  let days = Math.floor(distance / daySecs);
  distance %= daySecs;
  let hours = Math.floor(distance / hourSecs);
  distance %= hourSecs;
  let mins = Math.floor(distance / 60);
  distance %= 60;
  let secs = Math.floor(distance);

  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("mins").innerHTML = mins < 10 ? `0${mins}` : mins;
  document.getElementById("secs").innerHTML = secs < 10 ? `0${secs}` : secs;

  if (distance < 0) {
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
    clearInterval(intervalID);
  }
}, 1000);
