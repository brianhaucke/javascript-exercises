const UPPER_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LOWER_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">","?", "/", "~"];
let password = ""
let num = 0;
//Step 1: Click on the "Generate Password" button to see the code here activate. 
//See which variables relate to which parts in the preview.
//passwordDisplay.innerHTML = password //getRandomLower() + getRandomUpper() + getRandomNumber() + getRandomSymbol()
//passwordDisplay.innerHTML = "Your generated password here";
console.log(requiredLength); //From password length textbox
console.log(hasLower); //From Include Uppercase Letters checkbox
console.log(hasUpper); //From Include Lowercase Letters checkbox
console.log(hasNumber); //From Include Numbers checkbox
console.log(hasSymbol); //From Include Symbols checkbox

//Step 2: Complete these 4 functions to output (that means return) a single random character corresponding to the function name.
//e.g. Calling getRandomLower() should return a single random lower case letter from LOWER_LETTERS
function getRandomLower() {
  //This function should return a random lower case letter from LOWER_LETTERS
  const randomIndex = Math.floor(Math.random() * LOWER_LETTERS.length)
  return LOWER_LETTERS[randomIndex];
}

function getRandomUpper() {
  //This function should return a random upper case letter from UPPER_LETTERS
  const randomIndex = Math.floor(Math.random() * UPPER_LETTERS.length);
  return UPPER_LETTERS[randomIndex];
}

function getRandomNumber() {
  //This function should return a random single digit number between 0 and 9 (inclusive).
  const randomIndex = Math.floor(Math.random() * 10);
  return randomIndex;
}

function getRandomSymbol() {
  //This function should return a random symbol from SYMBOLS
  const randomIndex = Math.floor(Math.random() * SYMBOLS.length);
  return SYMBOLS[randomIndex];
}

// Step 3: Depending on which checkboxes are checked, add a single character from that selection.
//e.g. If Include Uppercase Letters is checked, then hasUpper will be true, so we need to add a random upper case
//character to our final password from UPPER_LETTERS array.
// if (hasUpper) {
//   getRandomUpper()
// }
// if (hasLower) {
//   getRandomLower()
// }
// if (hasNumber) {
//   getRandomNumber()
// }
// if (hasSymbol) {
//   getRandomSymbol()
// }
    
//Step 4: Use a for loop, to add random characters to the password, depending on user choice, to get the final
//password length to match the Password Length textfield.
//HINT: You might want to use a switch statement inside your for loop.
while (num < requiredLength) {
  if (hasUpper && num != requiredLength) {
    password += getRandomUpper()
    num++
}
  if (hasLower && num != requiredLength) {
    password += getRandomLower()
    num++
}
  if (hasNumber && num != requiredLength) {
    password += getRandomNumber()
    num++
}
  if (hasSymbol && num != requiredLength) {
    password += getRandomSymbol()
    num++
}
}


//Step 5: Update the password field in the preview by setting passwordDisplay.innerHTML
passwordDisplay.innerHTML = password 