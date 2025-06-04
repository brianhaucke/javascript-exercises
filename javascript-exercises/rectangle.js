//Rectangle of X

let width = Number(inputs[0]);
let height = Number(inputs[1]);
console.log(createRect(width, height));

function createRect(horizontalSize, verticalSize) {
  //Write your code here.
  let a = ""
  let b = "\n"
  for (let j = verticalSize; j > 0; j--){
    for (let i = 0; i < horizontalSize; i++){
      a+=" X "
      
    }
    if (j == 1){
      b=""
    }
    a+=b
    
  }
  return a;

}

// Alternate solution
console.log(createRect(2, 3));
function createRect(horizontalSize, verticalSize) {
  let rectangle = "";
  
  for (let y = 0; y < verticalSize; y++) {
    let currentRow = "";
    for (let x = 0; x < horizontalSize; x++) {
      currentRow += " X "
    }
        
    if (y < verticalSize - 1) {
      rectangle += currentRow + "\n";
    } else {
      rectangle += currentRow;
    }
  }
  return rectangle;
}