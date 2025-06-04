//computerChoiceDisplay.innerHTML = "✊";
resultMessage.innerHTML = "This is where you control this text."
console.log(playerChoice);
const emojiChoices = ["✊", "🤚", "✌️"];
let computerChoice = emojiChoices[Math.floor(Math.random()*emojiChoices.length)]

//Step 1 - Make the computer choose a random emoji from emojiChoices array.

//Step 2 - Display the computer choice using computerChoiceDisplay.innerHTML.
computerChoiceDisplay.innerHTML = computerChoice;
//Step 3 - Check if playerChoice is the same as computer choice, if this is the case then set the resultDisplay.innerHTML to say it is a draw.
if (playerChoice == computerChoice) {
  resultMessage.innerHTML = "It's a draw."
} else if (playerChoice == emojiChoices[0] && computerChoice == emojiChoices[1] 
           || playerChoice == emojiChoices[1] && computerChoice == emojiChoices[2] 
           || playerChoice == emojiChoices[2] && computerChoice == emojiChoices[0]) {
  resultMessage.innerHTML = ("Player loses, computer wins!")
           } else {
  resultMessage.innerHTML = ("Player WINS! Computer loses.")
           }
//Step 4 - Check for conditions where the player loses and change the resultDisplay.innerHTML to say they lost:
//Rock wins against scissors.
//Scissors win against paper.
//Paper wins against rock.
//Step 5 - Otherwise tell the user they have won.
// You can take a plane, ride a train, or walk to Rome