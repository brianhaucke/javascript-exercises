const UPPER_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const LOWER_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ">","?", "/", "~"];

function getRandomLower() {
  return LOWER_LETTERS[Math.floor(Math.random() * LOWER_LETTERS.length)];
}

function getRandomUpper() {
  return UPPER_LETTERS[Math.floor(Math.random() * UPPER_LETTERS.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function getRandomSymbol() {
  return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}

let password = "";
if (hasLower){password += getRandomLower()};
if (hasUpper) {password += getRandomUpper()};
if (hasNumber) {password += getRandomNumber()};
if (hasSymbol) {password += getRandomSymbol()};
let numCharRemaining = requiredLength - password.length;

for (let charNum = 0; charNum < numCharRemaining; charNum++) {

  const randomCharType = Math.floor(Math.random() * 4);
  
  switch (randomCharType) {
    case 0:
      if (hasLower) {
        password += getRandomLower();
        break;
      }
    case 1:
      if (hasUpper) {
        password += getRandomUpper();
        break;
      }
    case 2:
      if (hasNumber) {
        password += getRandomNumber();
        break;
      }
    case 3:
      if (hasSymbol) {
        password += getRandomSymbol();
        break;
      }
    default:
      if (hasLower) {
        password += getRandomLower();
      } else if (hasUpper) {
        password += getRandomUpper();
      } else if (hasNumber) {
        password += getRandomNumber();
      } else {
        password += getRandomSymbol();
      }
  }
}
