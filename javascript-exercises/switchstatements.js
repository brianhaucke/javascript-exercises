/*Switch statements

switch (variable) {
  case value1:
    //Do something when variable === value1.
    break;
  case value2:
    //Do something else when variable === value2.
    break;

    No break statement = Fallthrough

Stacking multiple cases
switch (userInput) {
  case "YES":
  case "Yes":
  case "yes":
    console.log("Let's start the game!");
    break;
}

*/

let customerStarRating = 5 //Number(inputs[0]);

switch(customerStarRating){
  case 1:
    console.log("How can we improve?")
    break;
  case 2:
    console.log("Thanks, what did you enjoy about your experience?")
    break;
  case 3:
    console.log("Thanks, we'd love to know how we can do better!")
    break;
  case 4:
    console.log("Thanks for your rating, please let us know if you have any feedback.")
    break;
  case 5:
    console.log("Yay! Thanks so much! Hope to see you again soon!")
    break;
}

switch(userInput) {
  case "YES":
    console.log("Let's start the game!")
    break;
  case "Yes":
    console.log("Let's start the game!")
    break;
  case "yes":
    console.log("Let's start the game!")
    break;
  case "NO":
    console.log("Game over.")
    break;
  case "No":
    console.log("Game over.")
    break;
  case "no":
    console.log("Game over.")
    break;
  default:
    console.log("I don't understand your input.")
}

let age = 12; //The input is ALWAYS a String
switch (age) {
  case 12:
    console.log("It's the number 12!");
    break
  default:
    console.log("It's not the number 12!");
}

//Try uncommenting the line below and you'll see the data type of the input
console.log(typeof(inputs[0]));
//

switch(inputs[1]) {
  case "+":
    console.log(Number(inputs[0]) + Number(inputs[2]))
    break;
  case "-":
    console.log(Number(inputs[0]) - Number(inputs[2]))
    break;
  case "*":
  case "x":
    console.log(Number(inputs[0]) * Number(inputs[2]))
    break;
  case "/":
    console.log(Number(inputs[0]) / Number(inputs[2]))
    break;
  default:
    console.log("Unknown symbol.")
}

/* Calculator */

console.log(num1);
console.log(selectedOperation);
console.log(num2);
display.innerHTML = "Hello";

switch(selectedOperation){
  case "+":
    display.innerHTML = Number(num1) + Number(num2)
    break;
  case "-":
    display.innerHTML = Number(num1) - Number(num2)
    break;
  case "*":
    display.innerHTML = Number(num1) * Number(num2)
    break;
  case "/":
    display.innerHTML = Number(num1) / Number(num2)
    break;
  case "%":
    display.innerHTML = Number(num1) % Number(num2)
    break;
  case "^":
    display.innerHTML = Number(num1) ** Number(num2)
    break;
  default:
   	display.innerHTML = "Error";
}
for (let num = 0; num < requiredLength, num++) {
  switch(characters){
      case("hasUpper"):
        password+=getRandomUpper();
        num++
      case("hasLower"):
        password+=getRandomLower();
        num++
      case("hasNumber"):
        password+=getRandomNumber();
        num++
      case("hasSymbol"):
        password+=getRandomSymbol();
        num++
  }
}



//Here's how she did it
let result;

switch (selectedOperation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  case "%":
    result = num1 % num2;
    break;
  case "^":
    result = num1 ** num2;
    break;
  default:
    result = "Error";
}
display.innerHTML = result;

