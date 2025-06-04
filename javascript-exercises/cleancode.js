//Clean Code

/*Zen of Coding
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
*/

//1. Indentation
for (let n = 0; n < 5; n++) {
  if (n % 2 === 0) {
    console.log(n);
  }
} 

let isGameOver = false;
let userGuess = "FizzBuzz";
let correctAnswer;
let score = 0;

function game(difficulty) {
  while (!isGameOver) {
    for (let n = 0; n < 100; n++) {
      if (n % 3 === 0 && n % 5 === 0) {
        if (userGuess === "FizzBuzz") {
          console.log("Correct");
          score++;
        }
      }
    }
  }
}

//2. Whitespace
if (n % 2 === 3 && n % 5 === 0) {
  console.log("FizzBuzz");
}

let friends = ["Angela", "Tom", "Ben"];

for (friend of friends) {
  if (friend.length >= 5) {
    console.log("Best friend!");
  }
}

//3. Create Good Names
let 123 = true; //illegal
let let = "hello" //also illegal

let p1a = 17; //bad
function r2dp(){} //also bad

let player1Age = 17; //good
function round2DecimalPlaces() {} //good

//Don't forget camel casing
function speedofart() {} 

//Don't create meaningless names
let a = "Harry Potter";

//Use verbs for functions and nouns for variables
function buildWord() {}
let levelMap = "";

//Flat is better than nested
//Instead of this
for (let n = 0; n < 100; n++) {
  if (n % 3 === 0) {
    if (n % 5 === 0) {
      console.log("FizzBuzz");
    } 
}

//Use THIS
for (let n = 0; n < 100; n++) {
  if (n % 3 === 0 && n % 5 === 0) {
      console.log("FizzBuzz");
  }
}

function isLeap(year) {
    // A year is a leap year if:
    // 1. It is divisible by 4 
    // AND
    // 2. It is either not divisible by 100 OR it is divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Is Leap");
    } else {
        console.log("Not Leap");
    }
}
isLeap(inputs[0]);

//5. EXPLAIN YOURSELF
//Will return true for an even number passed to it.
function checkIsEven(number) {
  //if number divided by 2 has no remainder
  if (number % 2 === 0) {
    //then it's even.
    return true;
  } else {
    return false;
  }
}

for (let number = 1; number < 101; number++) {
  // If the number is divisible by both 3 and 5, print FizzBuzz
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  // If the number is only divisible by 3, print Fizz
  } else if (number % 3 === 0) {
    console.log("Fizz");
  // If the number is only divisible by 5, print Buzz
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else {
  // If the number is not divisibly by 3 or 5, print the number
    console.log(number);
  }
}

// Prime Checker
function isPrime(number) {

  let counter = 0;
  for (i = 1; i <= number; i++){
    // Every time the number % i equals 0, add 1 to the Counter
    if (number % i == 0) {
      counter++
    }
  }
  // If the counter equals 2, 
  // that means it was only divisible by itself and 1,
  // making it a Prime Number!
  if (counter == 2){
    return "true"
  } else {
    return "false"
  }
}

console.log(isPrime(inputs[0]));


