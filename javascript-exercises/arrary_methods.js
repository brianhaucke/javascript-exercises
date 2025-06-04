// Array Methods
// Arrays are Objects too!

let normalArray = ["X", "Y", "Z"];

let object = {
  0: "A",
  1: "B",
  2: "C",
}

console.log(object[0]) //A

/* 
Use a for...in loop on the array to add 1 to each number in the array.
So...
1 would become 2
2 would become 3
3 would become 4
*/
let array = [1, 2, 3];

for (property in array){
  array[property]++;
}

console.log(array);

//Mutability
const aString = "Hello, World!"; //Can't be changed
const aNumber = 123; //Can't be changed
const aBoolean = true; //Can't be changed

//String, Number, Booleans = Primitive Data Types

//Just because the object is a constant, 
//doesn't mean you can't change the values inside it

//Switch order of the Egg and Chicken.

//Switch order of the Egg and Chicken.

let temp = whichCameFirst[0]
whichCameFirst[0] = whichCameFirst[1]
whichCameFirst[1] = temp
//delete whichCameFirst[]

console.log(whichCameFirst);


// // Complete the function so that it can be used to add a single new item to the 
// end of any array.

// // The function should update the array, i.e. it should mutate the array 
// that it's adding to.

// // NOTE: Behind the scenes, we have some code that will convert the first 
// line of the inputs area into a constant called myArray. 

const newItem = inputs[1];
function addItem(array, item) {
  //Write your code here.
  array[array.length] = item;
}

addItem(myArray, newItem);
console.log(myArray);

//The Spread Operator
let fruits = ["apples", "bananas", "cherries"];
let spread = [...fruits, "dates"];
// ["apples", "bananas", "cherries", "dates"]

let notSpread = [fruits, "dates"];
// [["apples", "bananas", "cherries"], "dates"]


//Adding New Items to an Array
let fruits = ["Apple", "Banana"]; 

fruits.push("Cherry"); //fruits.length = 3;
function push(newItem) => {
  fruits[fruits.length] = newItem;
}

fruits.concat("Cactus"); //fruits.length = 2;
function concat(newItem) {
  return [...fruits, newItem];
}

// ----- Push and Pop ----- //
/* --- Mutating methods --- */
let fruits = ["Apple", "Banana"];

//PUSH Add to end of arrays
fruits.push("Cherry"); // "Apple", "Banana", "Cherry"

//POP Removes last item from array
fruits.pop(); // "Apple","Banana"

// Concat
// Non-mutating method
let myList = ["Paris", "London"];
let yourList = ["New York", "Barcelona"]

let combinedList = myList.concat(yourList);
//["Paris", "London", "New York", "Barcelona"];

//Combine all arrays together in alphabetical order using concat()

let array1 = ["A", "B"];
let array2 = ["C", "D"];
let array3 = ["E", "F"];
let array4 = ["G", "H"];
let array5 = ["I", "J"];
let firstArray = array1.concat(array2);
let secondArray = firstArray.concat(array3);
let thirdArray = secondArray.concat(array4);

let finalArray = thirdArray.concat(array5);
console.log(finalArray)

// ------ Alt Answer ------
let array1 = ["A", "B"];
let array2 = ["C", "D"];
let array3 = ["E", "F"];
let array4 = ["G", "H"];
let array5 = ["I", "J"];

let finalArray = array1.concat(array2).concat(array3).concat(array4).concat(array5)
console.log(finalArray)

// SPLICE -> A mutating array method
let alphabet = ["A", "B", "D", "C", "E"];

let alphabet = ["A", "B", "D", "C", "E"];
                 0    1    2    3    4   
alphabet.splice(2, 2, "C", "D");

//["A", "B", "C", "D", "E"];

//array.splice(position, numberOFItemsToRemove, addItem1, ...., addItemX)
const whichCameFirst = ["Stones", "Egg", "Chicken", "iPhone"];
//Write your code here.
//whichCameFirst.splice(1, 2, "Chicken", "Egg");
whichCameFirst.splice(1, 2, whichCameFirst[2], whichCameFirst[1])

console.log(whichCameFirst);

// SLICE -> A non-mutating array method
const fish = ["Head", "Body", "Tail"];
console.log(`I will eat the fish ${fish.slice(1, 2)}`);
// "I will eat the fish Body"


/* +++++++++++++++++++ CHALLENGE ++++++++++++++++++++++++ */
//Create a function that removes a single item from an array.
//Use slice and concat

let friends = ["Rachel", "Monica", "Lisa"];

function removeAt(array, position) {
  let firstArray = array.slice(0,position);
  let secondArray = array.slice(position+1, array.length)
  let finalList = firstArray.concat(...secondArray);
  return finalList;
}

console.log(removeAt(friends, Number(inputs[0])));

// SHIFT and UNSHIFT
// Mutating

let numbers = [3,4,5,6,7];

numbers.shift(); //3 -- 
//Deletes the first item in the array. Output is the item that was removed
//POP takes the last item, SHIFT takes the first item

let numbers = [3,4,5,6,7]; 

numbers.unshift(1, 2); //7 --> the NEW length of the array
//numbers = [1,2,3,4,5,6,7];

/* Your job is to create a function that can output 
any size of fibonacci sequence. But reversed. 
The size of the sequence will be determined by 
the number in the input area. */


function reverseFib(n) {

  let sequence = [0,1]
  let reverseSequence = []
  let fib = 0;
  for (i = 0; i < (n-2); i++){ //for (let i=2; i<n; i++)
    fib = sequence[sequence.length-1] + sequence[sequence.length-2];
    sequence.push(fib);
  }
  for (i = 0; i < sequence.length; i++) {
    reverseSequence.unshift(sequence[i]); //reversedSequence.push(finalSequence.pop());
  }

  return reverseSequence;

}

// Easier way?
function reverseFib(n) {
  let finalSequence = [1,0];
  for (let i=2; i<n; i++) {
    finalSequence.unshift(finalSequence[0] + finalSequence[1]);
  }
  return finalSequence;
}

console.log(reverseFib(inputs[0]));

console.log(reverseFib(inputs[0]));