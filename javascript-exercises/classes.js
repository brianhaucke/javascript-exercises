//Classes
// Classes are a Blueprint (like a house blueprint or a stage for a gameshow, etc)
// Classes have a CONSTRUCTOR
//Objects, Objects and more Objects (with Objects)
let angela = {
  fName = "Angela",
  lName = "Yu",
  age = 12,
}
let harry = {
  fName = "Harry",
  lName = "Potter",
  age = 28,
}
// Making all these objects are Tedious!
// As a Lead, celebrate wins!

//CLASS -> It's a BLUEPRINT
class ClassName { 						// Pascal Case: Starts with a Capital Letter
  constructor(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }
}

let objectFromClass = new ClassName(argument1, argument2);

//1. Create a Person class using the class constructor.
//   This class should have 3 properties: 1) fName 2)lName 3)age
class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
  }
}

let Brian = new Person("Brian", "Haucke", "48");
let Cassie = new Person("Cassidy", "Haucke", "12");

console.log(Brian.lName);
console.log(Cassie.age);

class Animal {
  constructor(numberOfLegs) {
    this.numberOfLegs = numberOfLegs;
  }
  breathe() {
    console.log("Inhale, exhale.");
  }
}


//Add a greet() method to the Person class and call it.

class Person {
  constructor(firstName, lastName, age) {
    this.fName = firstName;
    this.lName = lastName;
    this.age = age;
  }
  greet(){
    console.log("Hello")
  }
}

let Brian = new Person("Brian", "Haucke", "48");
Brian.greet();


// this Keyword
class Animal {
  constructor(numberOfLegs) {
    this.numberOfLegs = numberOfLegs;
  }
  canStand() { //This method CAN have parameters
    if (this.numberOfLegs === 2) {return true;} //this = the current class being constructed
    else {return false;}
  }
}
let dog = new Animal(4);
console.log(dog.canStand()); //false
let human = new Animal(2);
console.log(human.canStand()); //true

//Modify the greet() function to say "Hello" but add a person to greet as a parameter and add "My name is ...".
// So if the angela object has a fName of Angela,
// We can call the method greet like this: angela.greet("Amy");
// And the output would be: "Hello Amy, my name is Angela".

class Person {
  constructor(firstName, lastName, age) {
    this.fName = firstName;
    this.lName = lastName;
    this.age = age;
  }

  greet(name) { 
    console.log(`Hello ${name}, my name is ${this.fName}.`)
  }
}
let Brian = new Person("Brian", "Haucke", "48");
Brian.greet("Angela");


// ----- //
//Write your code here.
class Todo {
  constructor(text, isComplete) {
    this.text = text;
    this.isComplete = isComplete;
  }
  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}

