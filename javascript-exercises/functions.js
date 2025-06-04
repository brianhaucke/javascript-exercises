//Defining the function
function turnRight(){
	turnLeft();
	turnLeft();
	turnLeft();
}

//Using the function
turnRight();

/*functions and parameters*/
// function(parameter)
// Parameter = name we give the variable
// Argument is the Actual value we give to the variable

function min(a,b){
  a = Number(a)
  b = Number(b)
  if (a<b) {
    return a
  } else if (b<a) {
    return b
  } else if (a == b) {
    return "It's a tie!";
  } else {
    return "Error!";
  }
}

console.log(min(inputs[0], inputs[1]))

// return;
// function earlyExit() {
//   console.log("This will be seen.");
//   return;
//   console.log("This will NOT be seen.");
//   console.log("This will NOT be seen.");
//   console.log("This will NOT be seen.");
// }

// earlyExit();

function greet(name) {
  if (name === "" || !name) {
    console.log("You forgot to give a name!");
    return;
  } 
  console.log("Hello " + name);
  console.log("How are you " + name);
}

greet();

