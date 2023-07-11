function clock() {
  const data = new Date();
  let hours = data.getHours();
  let min = data.getMinutes();
  let second = data.getSeconds();
  session = "AM";

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }
  hours = hours < 10 ? `0${hours}` : hours;
  min = min < 10 ? `0${min}` : min;
  second = second < 10 ? `0${second}` : second;
  let time = `${hours}:${min}:${second} ${session}`;
  document.querySelector(".clock").innerHTML = time;
}
setInterval(clock, 1000);
