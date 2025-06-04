//Arrow Functions
//Other ways of creating functions

//Normal Function
function bmi(height, weight) {
  return weight / height ** 2;
}

//Function Expression
let greet = function() {
  return "Hello"
}

//Can't create 2 functions or variable with same name
//ex
function greet(){
	return "Hello"
}
let greet = "Hello"


//Assigning the functionality of greet() to another function name.
let anotherGreet = greet;

//Calling anotherGreet() is now the same as calling greet().
anotherGreet();

//Convert this function into an expression.
function square(number) {
  return number * number;
}

let square = function(number){
  return number * number;
}

// //Hoisting
console.log(square(52));

function square(number) {
  return number * number;
}

// Function expressions DON'T GET HOISTED
let square = function(number) {
  return number * number;
}

// CALLBACKS
// Using a function as an argument to another Function

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("John", function() {
    console.log("Function has finished!");
});

//CALLBACK EXAMPLES

let input1 = Number(inputs[0]);
let input2 = Number(inputs[1]);

function calculator(n1, n2, calculationFunction) {
  console.log(calculationFunction(n1, n2));
}

//Add
calculator(input1, input2, function(n1, n2) {
  return n1 + n2;
});

//Subtract
calculator(input1, input2, function(n1, n2) {
  return n1 - n2;
})

//Multiply
calculator(input1, input2, function(n1, n2) {
  return n1 * n2;
})

//Divide
calculator(input1, input2, function(n1, n2) {
  return n1 / n2;
})

// ----- ARROW FUNCTIONS ----- //

function calculator(n1, n2, calculationFunction) {
  return calculationFunction(n1, n2)
}

//Add 3 to 4.
calculator(3, 4, function(n1, n2) {
  return n1 + n2;
})

calculator(3, 4, (n1, n2) => n1 + n2); //ARROW FUNCTION

// Declared function
function square(number) {
	return number * number;
}

// Function expression
let square = function(number) {
	return number * number
}

// Arrow expression
let square = (number) => number * number;

// Multi-line Arrow Functions
let power = (number, exponent) => {
  let counter = 0;
  let accumulator = number;
  while (counter < exponent) {
    accumulator *= number;
    counter++;
  }
  return accumulator;
}

//Single line can ignore the curly braces and the return
let square = (number) => number * number;

function isPalindrome(word, reverseFunction) {
  if (word === reverseFunction(word)) {
    console.log("Is palindrome");
  } else {
     console.log("Not palindrome");
  }
}

isPalindrome("wow", (aString) => {
   let reversedString = "";
   for (let i = aString.length - 1; i >= 0; i--) {
    reversedString += aString[i];
  }
  return reversedString;
});
