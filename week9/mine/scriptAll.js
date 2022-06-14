
const url = 'https://pokeapi.co/api/v2/pokemon';
const card = document.getElementById('card');


function printPokemon(pokemonList){
    pokemonList.forEach(pokemon =>{
        let li = document.createElement("li");
        li.textContent = pokemon.name;
        card.appendChild(li);
    })
}


function nextPage(data){
    if(data == null)
        return;
    else
    fetch(data)
        .then(response => response.json())
        .then(data => {

            printPokemon(data.results);

            nextPage(data.next);
        });
};

nextPage(url);



