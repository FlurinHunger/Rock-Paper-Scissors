let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_div = document.getElementById(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  console.log("WIN");
  userScore++;
  userScore_span = userScore;
  console.log(userScore);
}

function lose() {
  console.log("LOSE");
  computerScore++;
  computerScore_span = computerScore;
  console.log(computerScore);
}

function draw() {
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rp":
    case "ps":
    case "sr":
      lose();
      break;

    case "pr":
    case "rs":
    case "sp":
      win();
      break;

    case "ss":
    case "pp":
    case "rr":
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })

  paper_div.addEventListener('click', function() {
    game("p");
  })

  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();
