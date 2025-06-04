//While loop
let num = 0
while (num <=100) {
  console.log(num);
  num = num + 2; // incrementing usually happens at the end of the code block
}

// do-while loop

// do {
// 	/* Run this code block at least once */
// } while (/*Some condition is true*/)

let bottles = 99;

// while (bottles > 0){
//   console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\nTake one down and pass it around, ${bottles - 1} bottles of beer on the wall.`)
//   bottles = bottles - 1;
// }

do {
  console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.\nTake one down and pass it around, ${bottles - 1} bottles of beer on the wall.`)
  bottles-=1;
} while (bottles > 0)