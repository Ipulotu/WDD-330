
var url = 'https://pokeapi.co/api/v2/pokemon';
var data = ""
const card = document.getElementById('card');
const nextBnt = document.getElementById("nextBnt");
const prevBnt = document.getElementById("prevBnt");


async function getJSON() {
    return fetch(url)
        .then(response => response.json())
        .then(data => {return data})
    }

async function printPokemon(){
    data = await this.getJSON();
    let pokemonList = data.results;
    pokemonList.forEach(pokemon =>{
        let li = document.createElement("li");
        li.textContent = pokemon.name;
        card.appendChild(li);
    })
}

function clearPokemo(){
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
};

function nextPage(){
    url = data.next
    clearPokemo();
    printPokemon();
};

function prevPage(){
    url = data.previous;
    clearPokemo();
    printPokemon();
};


printPokemon();
nextBnt.addEventListener("click",  nextPage)
prevBnt.addEventListener("click",  prevPage)

