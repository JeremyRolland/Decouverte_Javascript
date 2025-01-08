for(let item of jsonDatas) {
    console.log(item);
}

const traductions = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeu vidéo",
    show: "spectacle"
};

const itemContainer = document.getElementById('item-container');

//Ajouter la traduction du type
for(let item of jsonDatas) {
    item.traductionType = traductions[item.type];
}

display(jsonDatas);

//Gestion de la saisie du type pour filtrer sur traductionType
const typeButton = document.getElementById('typeButton'); 
typeButton.addEventListener('click', () => { 
    const typeInput = document.getElementById('typeInput').value;
    const onlyType = jsonDatas.filter((el) => el.traductionType.toLowerCase().includes(typeInput.toLowerCase()));
    console.log(onlyType);
    display(onlyType);
});

//Gestion checkbox objets en stock
const stockCheckbox = document.getElementById('stockCheckbox');
stockCheckbox.addEventListener('change', () => {
    const isChecked = stockCheckbox.checked;
    let filteredArticles;
    if (isChecked) {
        filteredArticles = jsonDatas.filter((el) => el.quantity != 0);
    } else {
        filteredArticles = jsonDatas;
    }
    display(filteredArticles);
});

//Gestion des filtres
const listeFiltres = document.getElementById('listeFiltres');
listeFiltres.addEventListener('change', () => {
    const filtre = listeFiltres.value;
    let filteredArticles = jsonDatas;

    const compareAlphabetically = (a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase());
    const compareByPrice = (a, b) => a.price - b.price;

    switch(filtre) {
        case "croissantAlphabetique":
            filteredArticles.sort(compareAlphabetically);
            break;
        case "decroissantAlphabetique":
            filteredArticles.sort((a, b) => compareAlphabetically(b, a));
            break;
        case "croissantPrix":
            filteredArticles.sort(compareByPrice);
            break;
        case "decroissantPrix":
            filteredArticles.sort((a, b) => compareByPrice(b, a));
            break;
    }
    display(filteredArticles);
});

//Gestion ajout nouvel article
const submitButton = document.getElementById('submitButton'); 
submitButton.addEventListener('click', (event) => { 
    event.preventDefault();

    const name = document.getElementById('name').value;
    const traductionType = document.getElementById('type').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    jsonDatas.push({name, traductionType, description, price, quantity});
    
    display(jsonDatas);
});


//fonction d'affichage de la liste
function display(objets) {
    itemContainer.innerHTML = '';
    for(let objet of objets) {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
        <h2>${objet.name}</h2>
        <p>Type: ${objet.traductionType}</p>
        <p>Description: ${objet.description}</p>
        <p>Prix: ${objet.price}</p>
        <p>Quantité: ${objet.quantity}</p>
        `;
        itemContainer.appendChild(itemElement);
    }
}