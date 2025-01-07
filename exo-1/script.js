const kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
const celsius = kelvins - 273;   //Déclaration variable celsius résultat de la variable kelvin à laquelle on soustrait 273
let fahrenheits = celsius * (9/5) + 32;
fahrenheits = Math.floor(fahrenheits); //Utilisation de la fonction floor de la librairie Math afin d'arrondir la valeur de fahrenheits
console.log(fahrenheits);   //Affichage de la variable fahrenheits dans la console