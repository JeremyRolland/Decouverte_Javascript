//Restructurer les données
function restructureData() {
    return jsonDatas.reduce((acc, item) => {
        let typeGroup = acc.find(group => group.type === item.type);
        if (!typeGroup) {
            typeGroup = {
                type: item.type,
                items: []
            };
            acc.push(typeGroup);
        }
        typeGroup.items.push({
            name: item.name,
            description: item.description,
            price: item.price,
            quantity: item.quantity,
            contact: {
                lastName: "Dubois",
                firstName: "Martin",
                address: "1 Grande Rue 74000 Annecy"
            }
        });
        return acc;
    }, []);
}

const restructuredData = restructureData(jsonDatas);

//Déclaration tableau de traduciton des types
const traductions = {
    car: "voiture",
    house: "maison",
    game: "jeu",
    videoGame: "jeu vidéo",
    show: "spectacle"
};

//Ajouter la traduction du type
for(let item of restructuredData) {
    item.traductionType = traductions[item.type];
}

const itemContainer = document.getElementById('item-container');

// Fonction d'affichage de la liste
function display(objets) {
    itemContainer.innerHTML = '';
    for (let group of objets) {
        for (let item of group.items) {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
            <h2>${item.name}</h2>
            <p>Type: ${group.traductionType}</p>
            <p>Description: ${item.description}</p>
            <p>Prix: ${item.price}</p>
            <p>Quantité: ${item.quantity}</p>
            <p>Contact: ${item.contact.firstName} ${item.contact.lastName}, ${item.contact.address}</p>
            `;
            itemContainer.appendChild(itemElement);
        }
    }
}

display(restructuredData);

//Gestion de la saisie du type pour filtrer sur traductionType
const typeButton = document.getElementById('typeButton'); 
typeButton.addEventListener('click', () => { 
    const typeInput = document.getElementById('typeInput').value;
    const onlyType = restructuredData.filter((el) => el.traductionType.toLowerCase().includes(typeInput.toLowerCase()));
    display(onlyType);
});

//Gestion checkbox objets en stock
const stockCheckbox = document.getElementById('stockCheckbox');
stockCheckbox.addEventListener('change', () => {
    const isChecked = stockCheckbox.checked;
    let filteredArticles;
    if (isChecked) {
        filteredArticles = restructuredData.filter((el) => el.quantity != 0);
    } else {
        filteredArticles = restructuredData;
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


