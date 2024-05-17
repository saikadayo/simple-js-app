let pokemonList = [];

// Starter Pokemon List
pokemonList = [
    {
        name: 'Bulbasaur',
        height: 7,
        type: ['grass', 'poison']
    },
    {
        name: 'Charmander',
        height: 6,
        type: ['fire']
    },
    {
        name: 'Squirtle',
        height: 5,
        type: ['water']
    }
];

// For Loop to write Pokemon name and height
for (let i = 0; i < pokemonList.length; i++) {
    // Condition so that Pokemon size 7 or higher gets a unique message in DOM
    if (pokemonList[i].height >= 7) {
        document.write(`<p><span class="pokemon_name">${pokemonList[i].name}</span> <span class="pokemon_height">(height: ${pokemonList[i].height})</span> - Wow, that's big!</p>`);
    // Else the written message in DOM is the generic name and height
    } else {
        document.write(`<p><span class="pokemon_name">${pokemonList[i].name}</span> <span class="pokemon_height">(height: ${pokemonList[i].height})</span></p>`);
    }
}