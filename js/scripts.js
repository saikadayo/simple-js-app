let pokemonRepository = (function () {
  let pokemonList = [];

  function getList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => 
        response.json()
    )
    .then((pokemon) => {
        pokemon.results.forEach(( (pokemon) => {
        let p = {
            name: pokemon.name,
            url: pokemon.url
        }
        add(p)
      }))
      })
      .catch((e) => {
        console.log(e)
      }
    )
  }

  function getAll() {
      return pokemonList;
  }

  function add(pokemon) {
      pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
      console.log(pokemon); // Log the Pokémon object
  }

  function addListItem(pokemon) {
      let pokemonListContainer = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listItem.appendChild(button);
      pokemonListContainer.appendChild(listItem);

      // Add event listener to the button
      button.addEventListener('click', function () {
          showDetails(pokemon); // Call the showDetails function with the Pokémon object
      });
  }

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      getList: getList
  };
})();

// Using forEach() to write Pokemon name and height if their height is 0.7 or bigger

pokemonRepository.getList().then( () => {
pokemonRepository.getAll().forEach(pokemon => {
pokemonRepository.addListItem(pokemon);
});
  });

// Output to print the formatted list with special text
function output(name, height, isBig) {
  const text = `<p><span class="pokemon_name">${name}</span> <span class="pokemon_height">(height: ${height})</span>`;
  return isBig ? text + " - Wow, that's big!</p>" : text;
}