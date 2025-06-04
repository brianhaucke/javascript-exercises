  let fruit = "Apple";
  function doSomething(fruit) {
    if (true) {
      let fruit = "Cherry";
      return fruit;
    }
  }
  console.log(doSomething("Banana"))
//Cherry

//Hoisting - Using a function even before we create it
greet();

function greet(){
  console.log("Hello")
}

