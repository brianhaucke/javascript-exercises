let isMember = false;
let age = 16;

if (isMember && age >= 65) {
  console.log(0);
} else if (isMember && age < 65) {
  console.log(5);
} else if (!isMember && age < 18) {
  console.log(10);
} else if (!isMember && age >= 18) {
  console.log(15);
} 
