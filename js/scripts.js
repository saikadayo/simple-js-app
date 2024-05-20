let pokemonList = [];

// Starter Pokemon List
pokemonList = [
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison']},
    { name: 'Charmander', height: 0.6, type: ['fire']},
    { name: 'Squirtle', height: 0.5, type: ['water']},
    { name: 'Caterpie', height: 0.3, type: ['bug']},
    { name: 'Weedle', height: 0.3, type: ['bug', 'poison']},
    { name: 'Pidgey', height: 0.3, type: ['normal', 'flying']}
];

// Using forEach() to write Pokemon name and height if their height 7 or bigger
pokemonList.forEach(pokemon => {
    const isBig = pokemon.height >= 0.7;
    document.write(output(pokemon.name, pokemon.height, isBig));
});

// Using forEach() to write Pokemon name regular size
function printArrayDetails(list) {
    list.forEach(pokemon => {
        document.write("<p>" + pokemon.name + "</p>");
        console.log(pokemon.name);
    });
}

// Output to print the formatted list
function output(name, height, isBig) {
    const text = `<p><span class="pokemon_name">${name}</span> <span class="pokemon_height">(height: ${height})</span>`;
    return isBig ? text + " - Wow, that's big!</p>" : text;
}