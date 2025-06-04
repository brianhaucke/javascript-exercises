// Write your code here to control the robot e.g.:
// move();
// dropBeeper();
function turnRight(){
  turnLeft();
  turnLeft();
  turnLeft();
}
while (frontIsClear() || !frontIsClear()){
if (frontIsClear() && facingEast()){
  while (frontIsClear()){
  move();
  dropBeeper();
  move();
  }
} else if (frontIsClear() && facingWest){
    while (frontIsClear()){
    dropBeeper();
    move();
    move();}
} else if (!frontIsClear() && facingEast()){
  while (!frontIsClear()){
    turnLeft();
    if (!frontIsClear()){break;}
    move();
    turnLeft();
  }
} else if (!frontIsClear() && facingWest()){
  while(!frontIsClear()){
    dropBeeper();
    turnRight();
    move();
    turnRight();
  }
}
}


/* ALTERNATIVE LOGIC */

//Create a function to make it easier to turn right.
function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}
//Drop a beeper if we're on an even cell.
function beep() {
  if (cellCount % 2 == 0) {
    dropBeeper();
    beeperCount++;
  }
}

let cellCount = 1;
let beeperCount = 0;

//Keep repeating this code until we have 12 beepers
while (beeperCount < 12) {
  beep();
  while (frontIsClear()) {
    move();
    cellCount++;
    beep();
  }
  cellCount++;
  if (facingEast()) {
    turnLeft();
    move();
    turnLeft();
  } else if (facingWest()) {
    turnRight();
    move();
    turnRight();
  }
}