// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(`Joe a ${joeInfo.cars.length} voitures.`);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);

let team = {
    players: [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    games : [{
        opponent: "Broncos",
        teampPoints: 42,
        opponentPoints: 27
    }],

    //Ajoute des joueurs
    addPlayer(firstName, lastName, age) {
        this.players.push({firstName, lastName, age});
    },

    //Ajoute des parties
    addGames(opponent, teampPoints, opponentPoints) {
        this.games.push({opponent, teampPoints, opponentPoints});
    },

    //Trouve le joueur le plus agé
    findOlderPlayer() {
        let oldestPlayer = this.players[0]; // Initialiser avec le premier joueur
        for(let player of this.players) {
            if(player.age > oldestPlayer.age) {
                oldestPlayer = player; // Mettre à jour si on trouve un joueur plus âgé
            }
        }
        console.log(`Le joueur le plus âgé est ${oldestPlayer.firstName} ${oldestPlayer.lastName}, âgé de ${oldestPlayer.age} ans.`);
    },

    //Trie les jouers pas ordre alphabétique
    sortPlayers() {
        this.players.sort((a, b) => {
            const nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
            const nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
        });
    }
    

}

console.log(team);
team.addPlayer("Toto","Tata",10);
team.addPlayer("Riri","Duck",18);
team.addPlayer("Fifi","Duck",24);
team.addGames("French", 13, 1);
team.addGames("Celtics", 12, 1);
team.addGames("German", 65, 1);

let totalTeamPoints = 0;
let totalOpponentPoints = 0;
//Parcours le tableau team.games
for(let game of team.games) {
    totalTeamPoints += game.teampPoints;
    totalOpponentPoints += game.opponentPoints;
}
console.log(`Score total de l'équipe: ${totalTeamPoints}.`);    //Affiche le score total de l'équipe
const averageOpponentPoints = totalOpponentPoints / team.games.length;
console.log(`Score moyen équipe adverse: ${averageOpponentPoints}.`);   //Affiche le score moyen des opposants

team.findOlderPlayer();

team.sortPlayers()
console.log(team.players);