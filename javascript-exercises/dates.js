//dates.js
// JavaScript Date Class

const moonDay = new Date(1969, 6, 20); //Year, Month, Day
//20th July 1969
//Months start counting from ZERO :-/
const myBirthday = new Date(1976, 8, 19);

const now = new Date(); // New date OBJECT --> Today

console.log(now.getFullYear()); // Current year
console.log(now.getMonth());    // Month 0 - 11
console.log(now.getDate());     // Day of the month
console.log(now.getDay());      // Day of the week 0 - 6
console.log(now.getHours());    // Current hour
console.log(now.getMinutes());  // Current minutes
console.log(now.getSeconds());  // Current seconds

console.log(`${now.getMonth()}/${now.getDate()}/${now.getFullYear()}`)


// DATE FORMATTER
const d = new Date(inputs[0], inputs[1], inputs[2]);
function dateFormatter(date) {
  let month = d.getMonth()+1;
  if (month < 10) {
    month = '0' + month;
  }
  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  return `${d.getFullYear()}-${month}-${day}`; // Should probably create a year variable too
}

console.log(dateFormatter(d));

// If there are getters.... there are Setters
const now = new Date();
console.log(now.setFullYear(3000)); // Current year
console.log(now.setMonth(12));    // Month
console.log(now.setDate(1));     // Day of the month
console.log(now.setHours(12));    // Current hour
console.log(now.setMinutes(23));  // Current minutes
console.log(now.setSeconds(45));  // Current seconds

// Formatting Dates
let now = new Date();
console.log(now.toLocaleDateString()); // 08/01/1998

console.log(now.toLocaleDateString("en-US")); //1/8/1998
console.log(now.toLocaleDateString("fr-CA")); //1998-01-08

const options = { month: 'long', day: 'numeric' };
console.log(now.toLocaleDateString('en-US', options));
//September 2


const moonCoderBirthday = new Date(inputs[0], inputs[1], inputs[2]);
function weekdayOfBirth(date) {
  //const options = {date: 'full'}
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[date.getDay()];
  
}
console.log(weekdayOfBirth(moonCoderBirthday));

// Alt answer that doesn't use date.getDay(); Found through Mozilla docs.
const moonCoderBirthday = new Date(1963, 7, 17);
function weekdayOfBirth(date) {
  return date.toLocaleDateString("en-US", {weekday: "long"});
}
console.log(weekdayOfBirth(moonCoderBirthday));

// What's so special about 1st Jan 1970;
let now = new Date();
let anotherNow = Date.now(); //1731942447227
// -> How many milliseconds since Unix epoch date

let millenium = new Date(2000, 0, 1); //1/1/2000
let anotherMillenium = new Date(946684800000);

let differenceInMs = now - millenium;



//Calulate number of days in between two dates

const startDate = new Date(inputs[0], inputs[1], inputs[2]);
const endDate = new Date(inputs[3], inputs[4], inputs[5]);
function differenceInDays(date1, date2) {

  let difference = date2 - date1;

  let differenceInSeconds = difference / 1000;
  let differenceInMinutes = differenceInSeconds / 60;
  let differenceInHours = differenceInMinutes / 60;
  let differenceInDays = differenceInHours / 24

  if (differenceInDays < 0){
    	differenceInDays *= -1;
  }
  return Math.round(differenceInDays);

}

console.log(differenceInDays(startDate, endDate));

//Alt Answer
const startDate = new Date(2024, 3, 12);
const endDate = new Date(2024, 6, 31);
function differenceInDays(date1, date2) {
  let difference = (date1 - date2) / (1000 * 60 * 60 * 24);
  // if (difference < 0) {difference * -1}
  difference = Math.abs(difference);
  return difference;
}

console.log(differenceInDays(startDate, endDate));


// Format date to look like this example: 17th August 1936
console.log(format(date));
function format(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  month = monthNames[month];
  let day = date.getDate();
  if (day == 1 || day == 31 || day = 21){
    day += 'st'
  } else if (day == 2 || day == 22){
    day += 'nd'
  } else if (day == 3) {
    day += 'rd'
  } else {
    day += 'th'
  }
  //return date.toLocaleDateString("en-US", {weekday: "long"});
  //return date;
  let finalDate = `${day} ${month} ${year}`
  return finalDate;
}

// ALT Answer but I like mine better
console.log(format(date));
function format(date) {
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", {month: "long"});
  let day = date.getDate();
  
  if (day > 3 && day < 21){
    day += "th";
    return `${day} ${month} ${year}`;
  }
  
  switch (day % 10) {
    case 1: 
      day += "st";
      break;
    case 2:
      day += "nd";
      break;
    case 3:
      day += "rd";
      break;
  }
  return `${day} ${month} ${year}`;
}

