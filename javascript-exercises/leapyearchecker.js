function leapYearChecker(year) {
  if (year % 4 == 0 && year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("Leap");
    } else {
      console.log("Not Leap")
    }
  } else if (year % 4 == 0 && year % 100 !== 0) {
    console.log("Leap")
  } else {
    console.log("Not Leap")
  }
}

leapYearChecker(2800)


let userFruit = inputs[0];
let fruits = ["Apple", "Banana", "Cherry", "Dates"];
n = 0

while (n < 4) {
  console.log(n);
  if (userFruit === fruits[n]) {
    console.log(`Your fruit is the number ${n} fruit.`)
  }
  n++;
}


function power(x,y){
  let i = 1; //let counter = 1 COUNTER IS A GOOD NAME FOR i
  let a = x; //let result = x;
  while (i < y) {
    x = x * a
    //console.log(x)
    i++
    
  }
  console.log(x)
}

let symbols = '@'
for (let n = 1; n < 7; n++){
  console.log(symbols)
  symbols += '@'
}