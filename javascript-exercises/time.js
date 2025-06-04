//time

let now = new Date();
//Wed Nov 20 2024 09:48:42 GMT+0000 (Greenwich Mean Time)

let oneSecAfterUnixTime = new Date(1000);
//Thu Jan 01 1970 00:00:01 GMT+0000 (Greenwich Mean Time)

//Time Methods
let now = new Date();
now.getMinutes();	   //Get minute (0-59)
now.getSeconds();	   //Get second (0-59)
now.getMilliseconds(); //Get millisecond (0-999)
now.getTime();	    //Get milliseconds since January 1, 1970

let now = new Date();
let then = new Date(0);
let differenceInMs = now - then;
//1732097306769

let now = new Date();
let msSince1970 = now.getTime();
let aYearInMs = 1 * 365 * 24 * 60 * 60 * 1000;
let future = msSince1970 + aYearInMs;
let futureDate = new Date(future);

console.log(futureDate);
//  ------  //

1 //start date 
9 //start month 
1939 //start year
2 //end date
9 //end month
1945 //end year


// difference(new Date(year, month - 1, day), new Date(year, month - 1, day));
difference(new Date(inputs[2], inputs[1] - 1, inputs[0]), new Date(inputs[5], inputs[4] - 1, inputs[3]));
function difference(startDate, endDate) {
  let diffInMs = endDate - startDate;
  let yearInMs = 365 * 24 * 60 * 60 * 1000;
  let diffInYears = Math.floor(diffInMs/yearInMs);
  let daysRemaining = diffInMs % yearInMs;
  let dayInMs = 24 * 60 * 60 * 1000;
  let extraDays = daysRemaining/dayInMs;
  for (let i = startDate.getFullYear(); i<endDate.getFullYear(); i++) {
    if (isLeap(i)) {
      extraDays -= 1;
    }
  }
  console.log(`${diffInYears} years, and ${extraDays} days`)
}

//Delay a Function
setTimeout(functionName, delayInMs);

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("John", function() {
    console.log("Function has finished!");
});

//TODO: Make the fireworks disappear after seeing the fireworks for 1 second.
function setFireworks() {
  display.innerHTML = "🎇";
}
function clearFireworks() {
  display.innerHTML = "";
}

setTimeout(setFireworks, 1000);
setTimeout(clearFireworks, 2500);

// Alt answer that's a little cleaner
function setFireworks() {
  display.innerHTML = "🎇";
  setTimeout(clear, 1000);
}

setTimeout(setFireworks, 1000);

function clear() {
  display.innerHTML = "";
}

// Arrow Functions
setTimeout(clear, 1000);

function clear() {
  display.innerHTML = "";
}

setTimeout(() => {display.innerHTML = ""}, 1000);

//Trigger a Function Repeately with Delay
setInterval(function, intervalInMs);

setInterval(() => {
  console.log("Hello");
}, 1000)

//TODO: Use setInterval() to make this countdown timer, count down from 60 with a gap of 1s.
let countdown = 60;

setInterval(() => {
  countdown--;
  numberDisplay.innerHTML = countdown;
}, 1000 );

//Stopping Timers
clearInterval(intervalId);

const intervalId = setInterval(() => {
  console.log("This will not do anything.");
}, 1000);

const timerId = setTimeout(() => {
  console.log("Hello from the other side.");
}, 5000);

clearTimeout(timerId);

//TODO: Fix this code so the timer stops when the number reaches 0.
let counter = 3;
const intervalId = setInterval(() => {
  counter--;
  numberDisplay.innerHTML = counter;
  if (counter === 0) {
    clearInterval(intervalId);
  }
}, 1000);

