// Strings

// Strings can also be Sliced
"Angela".slice(0, 5); //Angel

"Angela".slice(4); //la

 let bigWord = "gigantic";
 // example contained word: "ant"

 //Use slice() to console log as many contained words from bigWord as you can find.
 //Hint: There are at least 3.

console.log(bigWord.slice(3,6))

let word = "exist";

console.log(word.slice(2, 4)); //same thing
console.log(word.substring(2, 4)); //same thing
console.log(word.substr(2, 2)); //same thing. Second parameter is length

// Strings have properties string.length;
// Strings have methods string.slice(0,5);
// Are Strings Objects? Not exactly
let angela = "Angela";
angela.age = 12;
console.log(angela.age); //undefined

console.log(angela.slice(2, 5)) //gel
console.log(angela)

//All string methods are non-mutating
console.log(angela.slice(2, 5)) //gel
console.log(angela) //Angela

let fruits = ["apple", "oranges", "bananas"];
fruits.age = 12;
console.log(fruits); //["apple", "oranges", "bananas", age: 12]

let name = "Angela";
name.age = 12;


/////////
function stringSplice(aString, startIndex, spliceLength, stringToInsert) {
  let slicedWord = aString.slice(startIndex, spliceLength)
  let counter = 0;
  for (i = 0; i < slicedWord.length; i++){
    counter++;
  }

  console.log(counter)
  let newWord = aString.slice(counter, spliceLength)
  console.log(newWord);
  return newWord;
}

console.log(stringSplice(inputs[0], Number(inputs[1]), Number(inputs[2]), inputs[3]));

/* --------------------------- */
function stringSplice(aString, startIndex, spliceLength, stringToInsert) {
  // Remove 'spliceLength' characters starting at 'startIndex'
  let before = aString.slice(0, startIndex);
  let after = aString.slice(startIndex + spliceLength);
  
  // Insert 'stringToInsert' in the middle
  let newWord = before + stringToInsert + after;
  
  return newWord;
}

//Getting a character in a string
let password = "qwerty";
console.log(password.charAt(0)); //q

console.log(password[0]); //q

//Strings are primitives, therefore they are immutable
password[0] = "p";
console.log(password); //qwerty

// ---------------------------------- //

function findLongestString(arrayOfStrings) {
  //Write your code here.
  let longestWord = arrayOfStrings[0];
  for (i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > longestWord.length) {
      longestWord = arrayOfStrings[i]
    }  
  }
  return longestWord;
}

console.log(findLongestString(inputs))

// ----------ALT ANSWER----------- //

console.log(findLongestString(["Angela", "Jane", "Ben", "James", "Stacy"]));
function findLongestString(arrayOfStrings) {
  let maxLength = 0;
  let longestString;
  for (aString of arrayOfStrings) {
    if (aString.length > maxLength) {
      maxLength = aString.length;
      longestString = aString;
    }
  }
  return longestString;
}


//  --- CASE CHANGES --- // Remember that Strings are immutable
let firstName = "Harry";
let lastName = "Potter"
console.log(firstName.toLowerCase()); //"harry"
console.log(lastName.toUpperCase()); //"POTTER"

let str = "   Hello, world!   ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "Hello, world!"

// String.Split and Array.Join
let names = "Angela, Ben, Tom, Jenny, Helena";
let namesArray = names.split(", ");
//["Angela", "Ben", "Tom", "Jenny", "Helena"] Split turns strings into Arrays

let fruits = ["Apple", "Banana", "Cherry"];
let fruitKebab = fruits.join("-"); 
//"Apple-Banana-Cherry" Join turns Arrays into Strings

// -- Sentence Reverser -- // Didn't use wordsArray.reverse();

function sentenceReverser(aSentence) {
  //Write your code here.
  let backwardsArray = [];
  let reversedSentence = ""
  let sentenceArray = aSentence.split(" ");
  for (i = sentenceArray.length-1; i >= 0; i--){
    backwardsArray.push(sentenceArray[i]);
  reversedSentence = backwardsArray.join(" ")
  }
  return reversedSentence;
}

console.log(sentenceReverser(inputs[0]))


// --- Create a function that can capitalise the first letter of each word in a sentence. --- //

function capitaliseSentence(sentence) {
  //write your code here.
  let capitalizedWords = []
  let lower = sentence.toLowerCase();
  let sentenceArray = lower.split(" ");
  //return sentenceArray;
  for (i = 0; i<sentenceArray.length; i++) {
    let word = sentenceArray[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(capitalized);
  }
  return capitalizedWords.join(" ")
}



// ALT Answer (Mine's pretty good tho)


