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

//Default Property Values
class Todo {
  isComplete = false;
  constructor(text) {
    this.text = text;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}

let chores = new Todo("Clean Room");
console.log(chores.isComplete)
//false

//Private Properties
class Todo {
  #isComplete = false;
  constructor(text) {
    this.text = text;
  }

  toggleComplete() {
    this.isComplete = !this.isComplete;
  }
}

//Getters and Setters
class Todo {
  #isComplete = false;

  constructor(initialValue) {
   	this.#isComplete = initialValue;
  }

  get isComplete() {
    //if some condition is met then allow: <- This is a security thing
    return this.#isComplete;
  }

  set isComplete(newValue) {
    this.#isComplete = newValue;
  }
}

let todo = new Todo();
todo.isComplete = true;
console.log(todo.isComplete);


// 
let todos = [];

class Todo {
  #isComplete = false;
  constructor(text) {
    this.text = text;
  }

  toggleComplete() {
    this.#isComplete = !this.#isComplete;
  }

  get isComplete() {
    return this.#isComplete;
  }
}

function addClicked(todoInputText) {
  todos.push(new Todo(text));
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];
    displayTodo(todo.text, todo.isComplete, i);
  }
}

function checkboxClicked(index) {
  todos[index].toggleComplete();
  renderTodos();
}

function deleteClicked(index) {
  todos.splice(index, 1);
  renderTodos();
}

