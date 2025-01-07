let input = 'Turpentine and turtles';   //phrase d'entrée
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];  //tableau des voyelles
let resultArray = [];   //Liste vide

//Parcours la phrase d'entrée pour trouver des voyelles
for (let i=0; i<input.length; i++) {
   if(vowels.includes(input[i])) {
    resultArray.push(input[i]);
   }
}
console.log(resultArray.join('').toUpperCase());