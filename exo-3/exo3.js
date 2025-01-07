var playerInput = prompt("Your choice ( rock, paper, scissors) ?"); //Demande une entrée à l'utilisateur

playGame(); //Fonction principale

// Vérifie que le choix utilisateur correspond aux critères
function getPlayerChoice(playerInput) {
    const temp = playerInput.toLowerCase();
    if(temp === 'rock' || temp === 'paper' || temp === 'scissors') {
        return temp;
    } else {
        console.log("Erreur de saisie'")
    }
}

//Génère un jet pour l'ordinateur
function getComputerChoice() {
    const possibility = ["rock", "paper", "scissors"];
    return possibility[Math.floor(Math.random() * 3)];
}

//Gère le résultat du match
function findWinner(getPlayerChoice, getComputerChoice) {
   const outcomes = {
    rock: { rock: "Tied", scissors: "Won", paper: "Lost"},
    paper: { paper: "Tied", rock: "Won", scissors: "Lost" },
    scissors: { scissors: "Tied", paper: "Won", rock: "Lost"},
   };
   return outcomes[getPlayerChoice][getComputerChoice];
}

//fonction principale, appele les fonctiosn nécéssaires au déroulement d'une partie
function playGame() {
    const uChoice = getPlayerChoice(playerInput);
    const computerChoice = getComputerChoice();

    console.log("user:" ,uChoice);
    console.log("computer", computerChoice);

    console.log(findWinner(uChoice, computerChoice));
}
