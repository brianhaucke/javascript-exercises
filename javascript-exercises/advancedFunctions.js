advancedFunctions

// Default Parameter Values

function example(param = "default value") {
  console.log(param);
}

function greet(name) {
  console.log(`Hello ${name}!`);
}

greet("Alice"); // Hello Alice!

function greetIfYouAreBadAtNames(name = "you") {
  console.log(`Hello ${name}!`);
}

greetIfYouAreBadAtNames(); // Hello you!
greetIfYouAreBadAtNames("Alice"); // Hello Alice!

// ------------------------------------- //

function addTax(preTaxPrice, taxRate = 5) {
  //Write your code here.
  taxRate = taxRate *.01
  let totalPrice = preTaxPrice + (preTaxPrice * taxRate);
  return totalPrice.toFixed(2);
  
}

if (inputs[1]) {
  console.log(addTax(Number(inputs[0]), Number(inputs[1])));
} else {
  console.log(addTax(Number(inputs[0])));
}

// Alt Answer - The rounding to 2 decimal places is interesting
function addTax(preTaxPrice, taxRate = 5) {
  let result = preTaxPrice + preTaxPrice * (taxRate/100);
  return Math.round(result * 100) / 100;
}

// OPTIONAL ARGUMENTS
let now = new Date();
now.toLocaleDateString("en-US");
now.toLocaleDateString("en-US", {month: "long"});

class Date {
  toLocaleDateString(locale, options){
    //Some code.
  }
}

// Spread Operator -> Take the contents of an array and SPREAD it into Another Array
// End up with a single flat Array. Spread operator THREE DOTS ...
let abc = ["A", "B", "C"];
let abcdef = [...abc, "D", "E", "F"];

// The Rest Operator - Looks like a Spread operator
// Allows us to add as Many arguments as we want into the function call
// All the args get combined into one Array

function example(...args) {
  console.log(args); //[1, 2, 3]
}

example(1, 2, 3);

// Updated example
function example(firstParam, ...args) {
  console.log(args); //[2, 3]
}

example(1, 2, 3);

// Create a function called sum that can take any number of arguments 
// and returns the sum of all of the arguments added together. 
// Use the rest operator to achieve this.

function sum(...args) { //Should really say numbers instead of args
  let total = 0;
  for (const arg of args){
    total += arg;
  }
  return total;
}


console.log(sum(3, 5, 7));
console.log(sum(89, 56, 32, 43));
console.log(sum(12, 34))


// -- Recursive Functions --
// Functions that call itself
// Within the body of the function, we have a function call to itself
// It's going to repeat and continue in a circular fashion until a
// STOP condition is reached

function countDown(n) {
  console.log(n);
  if (n === 0) return;
  countDown(n - 1);
}

countDown(5);
