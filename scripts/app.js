let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converToWord(letter) {
  if (letter === "r") {
    return "Rock"
  } else if (letter === "s") {
    return "Scissors"
  }else {
    return "Papper"
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${converToWord(userChoice)} beats ${converToWord(computerChoice)} .You win!!`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 380);
}


function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${converToWord(computerChoice)} beats ${converToWord(userChoice)} .You lost...`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 380);
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${converToWord(computerChoice)} equals ${converToWord(userChoice)} .It's a draw.`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 380);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
  }
}

function main() {
  rock_div.addEventListener('click', () => game('r'))
  paper_div.addEventListener('click', () => game('p'))
  scissors_div.addEventListener('click', () => game('s'))
}

main();
