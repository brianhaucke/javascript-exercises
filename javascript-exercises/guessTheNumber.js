let height = 1.8;
if (height > 1.8) {
  console.log("Your size is L.");
} else if (height > 1.5) {
  console.log("Your size is M.");
} else if (height > 1.2) {
  console.log("Your size is S.");
}


let number = inputs[0];
if (number % 2 == 0){
  console.log("even")
} else {
  console.log("odd")
};


//Code is triggered everytime Submit button is clicked.
//userGuess contains the number the user enters in the input.
console.log(userGuess);
//randomNumber contains a mystery number between 1 and 100.
console.log(answerNumber);

if (userGuess == answerNumber) {
  resultText.innerHTML = `You got it! ${userGuess} was the number!`;
} else if (userGuess > answerNumber) {
  resultText.innerHTML = `${userGuess} was too high!`
} else if (userGuess < answerNumber) {
  resultText.innerHTML = `${userGuess} was too low!`
}

//use resultText.innerHTML = "text" to set the text below the guess area.
//resultText.innerHTML = "Hello";