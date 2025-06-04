//Khan Academy explaination of how to convert from C to F: https://youtu.be/NqbkvEK46xM 
//tempInF stores the value the user types into the input box.
let tempInF = prompt("What is the temperature in Farenheit: ");
console.log(tempInF);
//Conversion (F − 32) × 5/9 = C

let tempInC = (tempInF - 32) * (5 / 9)
//resultDisplay.innerHTML will set the result area when the "Convert to Celcius" button is clicked.
//resultDisplay.innerHTML = tempInC;
console.log(tempInC);