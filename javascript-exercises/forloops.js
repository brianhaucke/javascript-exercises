//For Loops

let n = 0;
while (n < 100) {
  console.log("Hello");
  n++;
}

for (let n = 0; n < 100; n++) {
  console.log("Hello");
}

// For Loop Syntax
// Start; End; Change;

let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}


let a = 1;

//pre-increment:
console.log(++a);

for (let n = 0; n < 100; n++) {
  if (n % 2 !== 0) {
    console.log(n);
  }
}

let classmates = ["Harry", "Hermione", "Ron"];

for (let n = 0; n < classmates.length; n++){
  console.log(classmates[n])
}

for (const person of classmates) {
  console.log(person);
}

//

let fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits){
  console.log(fruit + " pie")
}

const studentHeights = [180, 155, 189, 192, 167, 187, 177, 172];

let tallest = 0;
for (const height of studentHeights) {
  if (height > tallest) {
    tallest = height;
  }  
}
console.log(tallest)

//FizzBuzz
for (let i = 1; i <=100; i++) {
  if (i % 3 == 0){
    if (i % 5 == 0){
      console.log("FizzBuzz");
    } else {
      console.log("Fizz");
    } 
  } else if (i % 5 == 0){
    console.log("Buzz")
  } else {
    console.log(i)
  }
}


