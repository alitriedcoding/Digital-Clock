const HourEl = document.querySelector(".hour");
const MimuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const ampmEl = document.querySelector(".ampm");

Timer();
function Timer() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    ampm = "PM";
    h - 12;
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  HourEl.innerHTML = h;
  MimuteEl.innerHTML = m;
  secondEl.innerHTML = s;
  ampmEl.innerHTML = ampm;
  setInterval(Timer, 1000);
}
