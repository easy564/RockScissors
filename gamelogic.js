
// Test dialogue
console.log("Hello there")

let humanScore = 0;
let CpuScore = 0;

for (let i = 0; i < 5; i++) {

// Computer choice logic
function getCpuChoice(max) {
  return Math.floor(Math.random()* max);
}


let CpuChoice = getCpuChoice(3);

console.log(CpuChoice);

// Player choice logic
function getPlayerChoice() {
  let choice = prompt("Rock(0), Paper(1), or Scissors(2)? Type a corresponding number");
  return choice;
}

let playerChoice = getPlayerChoice();


console.log(playerChoice)


// Game loop



if (playerChoice == 0){
  if (CpuChoice == 1) {
    console.log("You lose! Paper covers your rock!");
    CpuScore++;
  }

  else if (CpuChoice == 0)  {
    console.log("It's a Draw! Rock against Rock");
  }

  else {
    console.log ("You Win! Rock smashes Scissors!");
    humanScore++;
  }
  }


if (playerChoice == 1){
  if (CpuChoice == 2){
    console.log("You lose! Scissors cuts up your paper!");
    CpuScore++;
  }
  else if (CpuChoice == 1){
    console.log("It's a Draw! Paper against Paper");
  }

  else {
    console.log("You Win! Paper covers Rock!");
    humanScore++;
  }
}

if (playerChoice == 2){
  if (CpuChoice == 0){
    console.log("You lose! Rock smashed your scissors!");
    CpuScore++;
  }

  else if (CpuChoice == 2){
    console.log("It's a draw! Scissors vs Scissors");
  }

  else {
    console.log("You Win! Scissors Slices up Paper!");
    humanScore++;

  }

}
}

console.log("The final scores are in! Human: " + humanScore + " Computer: " + CpuScore);
