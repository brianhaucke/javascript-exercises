//TODO: Set the countdown timer to count down every second to your birthday.
// You can set the numbers using daysDisplay, hoursDisplay, minutesDisplay and secondsDisplay.
// You can also set the emoji (emojiDisplay) and heading (headingDisplay).
//daysDisplay.innerHTML = 1;
const now = new Date();
const birthday = new Date(2025, 8, 19, 0, 0, 0);
let dayInMS = birthday - now;
let days = Math.ceil(dayInMS / (1000 * 60 * 60 * 24));
let hours = 24 + (birthday.getHours() - now.getHours())
let minutes = 60 + (birthday.getMinutes() - now.getMinutes());
let seconds = 60 + (birthday.getSeconds() - now.getSeconds());
// if (hour > 12) {hour-= 12};
// if (hour == 0) {hour = 12};
daysDisplay.innerHTML = days;
hoursDisplay.innerHTML = hours;
minutesDisplay.innerHTML = minutes;
secondsDisplay.innerHTML = seconds;

let countdown = seconds;
setInterval(()=>{
  countdown--;
  secondsDisplay.innerHTML = countdown;
  if (countdown == 0){
  minutes--;
  minutesDisplay.innerHTML = minutes;
  countdown = 60;
  }
  if (minutes == 0) {
  hours--;
  hoursDisplay.innerHTML = hours;
  minutes = 60;
}
  if (hours == 0) {
  days--;
  daysDisplay.innerHTML = days;
  hours = 23;
}
}, 1000);

// Alt Answer - mine works but this works nicer probably
const MY_BIRTHDAY_MONTH = 9;
const MY_BIRTHDAY_DAY = 19;

let now = new Date();
let thisYear = now.getFullYear();
let myBirthday = new Date(thisYear, MY_BIRTHDAY_MONTH - 1, MY_BIRTHDAY_DAY);

if (myBirthday.getTime() < now.getTime()) { //My birthday has already passed this year.
  myBirthday = new Date(thisYear + 1, MY_BIRTHDAY_MONTH - 1, MY_BIRTHDAY_DAY);
}

let countDown = setInterval(() => {
  let difference = myBirthday - new Date();
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let remainderHours = difference % (1000 * 60 * 60 * 24);
  let hours = Math.floor(remainderHours / (1000 * 60 * 60));
  let remainderMinutes = difference % (1000 * 60 * 60);
  let minutes = Math.floor(remainderMinutes / (1000 * 60));
  let remainderSeconds = difference % (1000 * 60);
  let seconds = Math.floor(remainderSeconds / 1000);

  daysDisplay.innerHTML = days;
  hoursDisplay.innerHTML = hours;
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countDown);
    headingDisplay.innerHTML = "Happy Birthday to Me!"
  }
}, 1000);