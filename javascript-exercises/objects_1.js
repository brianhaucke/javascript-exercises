//Objects

let myCar = ["Red", 5, 35000, ["Tony", "Angela"]];

console.log("The colour of my car is: " + myCar[1]);
//5? Oops! Should be myCar[0]

/*   OBJECTS!   */
let myCar = {
  colour: "Red",
  mileage: 35000,
  seats: 5,
  owners: ["Tony", "Angela"]
}

console.log(myCar.colour); //Red

/* PROPERTIES */
let myObjectName = {
  property1Name: "property 1",
  property2Name: "property 2",
}

let property1Name = "Normal variable"
console.log(property1Name); //Normal variable
console.log(myObjectName.property1Name) //property1

// Properties = Traits associated with an Object

let trail = {
  name: "Appalachian Trail",
  length: 2197,
  location: "Appalachian Mountains",
  highestPoint: 6643,
  lowestPoint: 124
}

console.log(trail.location)


let mainCharacter = {
  name: "Harry",
  age: 11,
  friends: ["Hermione", "Ron"]
}

console.log(mainCharacter.name); //Dot notation
console.log(mainCharacter["name"]); //Bracket notation

//Changing Property Values
let fruits = {
  apples: 5,
  pears: 3,
}
fruits.apples = 10;

for (propertyName in fruits) {
  console.log(propertyName);
}

// Use the for...in loop to print each of the properties and values in 
// the fruits object. Format the properties and values using template 
// literals in the format you see below in the expected output.

let fruits = {
  apples: 5,
  pears: 11,
  oranges: 4,
}

for (fruitName in fruits) {
  console.log(`${fruits[fruitName]} ${fruitName}`)
}
//Note to me, you don't need to put the bracket value in quotes.


//Adding new properties
let fruits = {
  apples: 5,
  pears: 3,
}

fruits.oranges = 2;
fruits["oranges"] = 2;

// DELETING properties
delete fruits.pears;
delete fruits["pears"];

//Challenge
/* 
    Use the for...in loop to delete all the items from the fruits object.
    Then add the new fruit and their value from the inputs area.
    Finally console log the updated fruits object.
NOTE: The current value of fruits is hidden, 
it is also declared as a const so you actually 
cannot just complete the exercise like this:
fruits = {
newProperty: newValue
} */

for (fruitName in fruits) {
  delete fruits[fruitName];
}

let newFruit = inputs[0];
let fruitAmount = Number(inputs[1]);

fruits[newFruit] = fruitAmount;

console.log(fruits);


//Objects Within Objects
let appalachianTrail = {
  length: 2197,
  location: "Appalachian Mountains",
  highestPoint: {
    heightInFt: 6643,
    name: "Clingmans Dome",
  },
  lowestPoint: {
    heightInFt: 124,
    name: "Bear Mountain State Park",
  }
}
//Find the name of the lowest point
console.log(appalachianTrail.lowestPoint.name)

// JSON = JavaScript Object Notation
let order1 = {
  number: 8463723,
  items: [
    {
      name: "Screws",
      quantity: 50,
    },
    {
      name: "Helmets",
      quantity: 2,
    }
  ],
}
//Flat pack 
'{"number":8463723,"items":[{"name":"Screws","quantity":50},{"name":"Helmets","quantity":2}]}'

//Convert this JSON string into a JavaScript Object
'{"id":1,"type":"general","setup":"Why don\'t scientists trust atoms?","punchline":"Because they make up everything!"}'
let joke = {
  id: 1,
  type: "general",
  setup: "Why don\'t scientists trust atoms?",
  punchline: "Because they make up everything!"
}

//Turn JavaScript objects into a JSON
let jokeAsJSON = JSON.stringify(joke);
console.log(jokeAsJSON);
//Turn JSON object into a JavaScript Object
let jokeAsJSObject = JSON.parse(jokeAsJSON);
console.log(jokeAsJSObject);

//Methods
//Methods are functions associated with an Object

let person = {
  name: "Angela",
  greetPeople: () => console.log("Hello everyone!"),
}

person.greetPeople();

let person = {
  name: "Angela",
  greetPeople: () => console.log("hello")  /*Console log "hello" using an arrow function.*/,
  leavePeople: function() {
    console.log("bye")
  }  /*Console log "bye" using a function expression*/,
  eatPeople: function eatPeople(){
    console.log("rawr")
  } /*Console log "rawr" using a regular named function*/,
  
}
//Call all three methods.
person.greetPeople();
person.leavePeople();
person.eatPeople();


// ------------------- //
let person = {
  name: "Angela",
  greetPeople: () => console.log("hello"), //arrow seems like the best for this
  leavePeople: function () {
    console.log("bye")
  },
  eatPeople: eat,
}

function eat() {
  console.log("rawr");
}

//Call all three methods.
person.greetPeople();
person.leavePeople();
person.eatPeople();


// Methods and Properties are Everywhere - EXAMPLE:
let fruits = ["Apple", "Banana", "Cherry"];
fruits.length; //length property of fruits array

console.log("Hello"); //simply a method called lot that exists on the console object
console.assert(4 == 5, "will print if false");

console.assert(4 == 5, "will print if false");

// THIS WORKS --SHRUG--
let person1 = {
  name: "Angela",
  age: 12,
}

let person2 = {
  name: "Angela",
  age: 28,
  occupation: "Teacher",
}

function compare(object1, object2){
  let counter = 0;
  if (Object.keys(object1).length == Object.keys(object2).length) {
    for (i in object1){ //change i to 'property'
      if (object1[i] != object2[i]) { //change i to 'property'
        counter++
      }
    } if (counter == 0) {
      console.log("true") 
    } else {
      console.log("false")
    }
  } else {
    console.log("false")
  }
} 

compare(obj1, obj2);


// ALTERNATE ANSWER - Mine was pretty good tho :\
function countProperties(object) {
  let numProperties = 0;
  for (property in object) {
    numProperties++;
  }
  return numProperties;
}

function compare(object1, object2) {
  
  if (countProperties(object1) !== countProperties(object2)) {
    return false
  }

  
  for (property in object1) {
    if (object1[property] !== object2[property]) {
       return false
    }
  }
  return true;
}
console.log(compare(obj1, obj2));