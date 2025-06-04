//WRDL

let selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)];
hintDisplay.innerHTML = selectedWord;

// 2D Arrays -> Array inside an Array
const my2DArray = [
  ["X0", "X1", "X2"],
  ["Y0", "Y1", "Y2"],
  ["Z0", "Z1", "Z2"]
]

console.log(my2DArray[0][0]);

my2DArray[1][1] = "Q";
console.log(my2DArray);

tileArray[0][1].innerHTML = letter;


let selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)];
hintDisplay.innerHTML = selectedWord;
let currentRow = 0;
let currentTile = 0;
const WORD_LENGTH = 4;

function letterTyped(letter) {
  //Task 2: Make the keys work and allow the user to click on keys to add letters to the first line of tiles.
  if (currentTile < WORD_LENGTH{
    let tile = tileArray[currentRow][currentTile]
    tile.innerHTML = letter;
    currentTile++;
  }

}

const WORD_LENGTH = 4;
let currentRow = 0;
let currentTile = 0;

function letterTyped(letter) {
  if (currentTile < WORD_LENGTH) {
    let tile = tileArray[currentRow][currentTile];
    tile.innerHTML = letter;
    currentTile++;
  }
}

//Task 3: Make the backspace button work.
//Everytime the user clicks the backspace button, this function will be triggered.
//We want it to delete the letter in right-most tile.

function deletePressed() {
  if (currentTile >= 0) {
    let tile = tileArray[currentRow][currentTile-1];
    tile.innerHTML = "";
    if (currentTile > 0){currentTile--;}
  }
}

//Alternate Answer that's maybe a bit cleaner :)
function deletePressed() {
  if (currentTile > 0) {
    currentTile--;
    const tile = tileArray[currentRow][currentTile];
    tile.innerHTML = "";
  }
}

//Task 4: Check the user has typed 4 letters
//You can use the alert() function to send the user a little pop up.
//Try clicking on the Enter key in the game area to see the alert below show up.
//Your job is to alert the user when they don't have 4 letters in the tiles.
function enterPressed() {
  let tile = tileArray[currentRow][currentTile]
  if(tile.innerHTML == ""){
    alert("Not Enough Letters!");
  }
}

//Alternate answer that's a little simpler :)
function enterPressed() {
  if (currentTile !== WORD_LENGTH) {
    alert("Not enough letters!");
  }
}

  //Task 5: Set the guessDisplay.innerHTML to the word the user typed on the first row.
  //You'll need to assemble it from the tileArray.

  /* ----------- Here's my original, works but clunky? No function ---------- */
  /*let guess = tileArray[currentRow][0].innerHTML + tileArray[currentRow][1].innerHTML 
           		+ tileArray[currentRow][2].innerHTML + tileArray[currentRow][3].innerHTML */
  //guessDisplay.innerHTML = guess;

  let guess = ""
  //getUserGuess(guess);
  guessDisplay.innerHTML = getUserGuess(guess)//guess;//"Hello"

function getUserGuess(word){
  for (i = 0; i < 4; i++) {
    word += tileArray[currentRow][i].innerHTML;
    //console.log(word)    
  }
  return word;
}

/*--------------*/

let userGuess = getUserGuess();

let isInWordList = false;

for (word of WORDS) {
  if (userGuess === word) {
    isInWordList = true;
  }
}

if (!isInWordList) {
  alert("That's not a word!");
}

function markCorrectLetters(guessedWord) {
  //Task 7: Mark the tiles where the userGuess matches the selectedWord green.
  //e.g. If the selectedWord was MILE and the userGuess was LITE, then only I and T tiles will be marked green.
  // You can mark a tile and keyboard key green using the turnGreen(tile) function I created. e.g.
  //turnGreen(tileArray[0][0]);
  for (i = 0; i < WORD_LENGTH; i++){
  if (guessedWord[currentRow][i] == selectedWord[currentRow][i]){
    turnGreen(tileArray[currentRow][i])
  }
  }
}

//Little bit different 
// - make tileArray[currentRow][i] into a variable correctTile

function markCorrectLetters(guessedWord) {
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessedWord[i] === selectedWord[i]) {
      let correctTile = tileArray[currentRow][i];
      turnGreen(correctTile);
    }
  }
}

 //Task 8: Mark letters that are present in the selectedWord Yellow if they are not in the correct positions.
  //Mark letters that are not present in the selectedWord Gray.
  //e.g. selectedWord = "BARK", userGuess = "CARB"; C is not in BARK so it's gray, AR are in BARK and in the right positions so green, B is in BARK but in the wrong place so it's yellow.
  //Functions you can use:
  // turnGreen(tileArray[0][0]);
  // turnYellow(tileArray[0][1]);
  // turnGray(tileArray[0][2]);

}

function markRightLetterWrongTile(guessedWord){
  for (let i = 0; i < WORD_LENGTH; i++){
    console.log(selectedWord[i])
    if (guessedWord[i] !== selectedWord[i]) {
      if (guessedWord[i] == selectedWord[i-1] 
          || guessedWord[i] == selectedWord[i-2] 
          || guessedWord[i] == selectedWord[i-3]
          || guessedWord[i] == selectedWord[i+1]
          || guessedWord[i] == selectedWord[i+2]
          || guessedWord[i] == selectedWord[i+3] 
         ){
        console.log("right letter wrong tile");
        turnYellow(tileArray[currentRow][i]);
      } else {
        turnGray(tileArray[currentRow][i]) //Turns it gray
      }
    }
  }
}


function enterPressed() {
  if (currentTile !== WORD_LENGTH) {
    alert("Not enough letters!");
    //Part 2. If word too short it should not check userGuess.
    return;
  }
  let userGuess = getUserGuess();
  let isInWordList = false;
  for (word of WORDS) {
    if (userGuess === word) {
      isInWordList = true;
      break;
    }
  }
  if (!isInWordList) {
    alert("That's not a word!");
  //Part 3. If userGuess is not a word, it should not check userGuess.
    return;
  }
  let firstPass = markCorrectLetters(userGuess);
  markPresentLetters(firstPass);

  //Task 9: Part 1. Allow the game to progress to the next row once done checking the first word.
  currentRow++
  currentTile = 0;


  //Task 10: If the user get's the word right then show them an alert() and end the game.
  //If the user uses up all 4 attempts, then show them an alert() and end the game.

  if (userGuess == selectedWord){
    alert("You guessed the word! Congratulations!")
    return;
  }

  currentRow++;
  currentTile = 0;

  if (currentRow > 3){
    alert(`You are out of guesses. The word was ${selectedWord}. Game Over.`)
    return;
  // Better answer
  //  if (currentRow === MAX_GUESSES - 1) {
  //  	alert(`Game Over! The word was ${selectedWord}.`);
  //  	return;
  }  
  }
}



