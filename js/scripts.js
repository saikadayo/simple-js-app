let pokemonRepository = (function () {
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
  
    function getAll() {
      return pokemonList;
    }
  
    function add(pokemon) {
      pokemonList.push(pokemon);
    }
  
    return {
      add: add,
      getAll: getAll
    };
  })();
  
  // Using forEach() to write Pokemon name and height if their height is 0.7 or bigger
  pokemonRepository.getAll().forEach(pokemon => {
    const isBig = pokemon.height >= 0.7;
    document.write(output(pokemon.name, pokemon.height, isBig));
  });

  // Output to print the formatted list with special text
  function output(name, height, isBig) {
    const text = `<p><span class="pokemon_name">${name}</span> <span class="pokemon_height">(height: ${height})</span>`;
    return isBig ? text + " - Wow, that's big!</p>" : text;
  }