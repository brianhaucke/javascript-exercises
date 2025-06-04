//Type something in text box and click "Transform Text" to activate this code.
resultDisplay.innerHTML = inputText;
//Hint: you can get the number of letters in a string using .length
console.log(inputText.length);

let counter = 1;
let new_word = ""
while (counter <= inputText.length){
  console.log(inputText[inputText.length-counter])
  word += inputText[inputText.length-counter]
  counter ++
}
resultDisplay.innerHTML = new_word;

/*
let reversedText = "";
let lastLetterIndex = inputText.length - 1;ff

while (lastLetterIndex >= 0) {
    reversedText += inputText[lastLetterIndex]
    lastLetterIndex--;
}

resultDisplay.innerHTML = reversedText;
*/
