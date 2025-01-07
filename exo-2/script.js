const myDate = new Date();  //Déclaration objet Date()
const messageDayWeek = 'Jour semaine'   //déclaration message semaine
const messageDayWeekEnd = 'Jour week-end'   //declaration message week-end
let actualDay;  //déclaration variable pour le jour
let actualHour; //declaration variable pour l'heure

const isTesting = true; //déclaration variable mode test
//Assignation des variables de test si condition vérifiée
if (isTesting) {    
    actualDay = Number(prompt("Quel jour utiliser ? (Sunday - Saturday : 0 - 6)")); //on demande une valeur à l'utilisateur et on cast en nombre
    actualHour =Number(prompt("Quelle heure utiliser ?"));  //on demande une valeur à l'utilisateur et on cast en nombre
} else {
    actualDay = myDate.getDay();    //On récupère le jour actuel
    actualHour = myDate.getHours(); //On récupère l'heure actuelle
}
//Vérifie si on est samedi ou dimanche
if(actualDay === 0 || actualDay === 6) {
    console.log(messageDayWeekEnd);
} else {
    console.log(messageDayWeek);
}
//Vérifie si on est samedi ou dimanche ou vendredi à partir de 17h
if(actualDay === 0 || actualDay === 6 || (actualDay === 5 && actualHour >= 17)) {
    console.log(messageDayWeekEnd);
} else {
    console.log(messageDayWeek);
}
