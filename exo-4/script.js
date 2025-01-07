var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();    //supprime le dernier element de la liste
secretMessage.push("to", "program");    //Ajoute des éléments à la liste
const index = secretMessage.findIndex((element) => element === "easily");   //Recupère l'index correspondant au premier élément de valeur easily
secretMessage[index] = "rigth"; //Modifie la valeur de l'élément à la position "index" par rigth
secretMessage.shift();  //Supprime le premier élément de la liste
secretMessage[0] = "Programming";   //Ajoute "console.log(secretMessage);" au début de la liste
secretMessage.forEach((element) => {
    if(element === "get" || element === "right" || element === "the" || element === "first" || element === "time") {
        const i = secretMessage.findIndex((el) => el === element);
        secretMessage[i] = "know";
    }
});
console.log(secretMessage.join(' '));   //concatene le tableau par les espaces