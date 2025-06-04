// console.log(lampPluggedIn);
// console.log(bulbBroken);
let lampPluggedIn = true
let bulbBroken = false

if (lampPluggedIn && !bulbBroken) {
  console.log("Repair lamp")
} else if (lampPluggedIn) {
  console.log("Replace bulb")
} else if (!lampPluggedIn) {
  console.log("Plug in lamp")
}


// let lampPluggedIn = true;
// let bulbBroken = false;

// if (!lampPluggedIn) {
//   console.log("Plug in lamp")
// } else if (lampPluggedIn && bulbBroken) {
//   console.log("Replace bulb")
// } else if (lampPluggedIn && !bulbBroken) {
//   console.log("Repair lamp")
// }