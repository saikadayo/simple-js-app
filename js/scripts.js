let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  let modalContainer = $('#modal-container'); // Use jQuery to select the modal container

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonListElement = $('#pokemon-list'); // Use jQuery to select the Pokemon list
    let listItem = $('<li>'); // Create a new list item
    let button = $('<button>').text(pokemon.name).addClass('btn btn-light').attr("data-toggle","modal").attr("data-target","#exampleModal"); // Create a button element
    listItem.addClass('list-group-item flex-fill col-xs-6 col-sm-4').append(button); // Append the button to the list item
    pokemonListElement.append(listItem); // Append the list item to the Pokemon list
    button.on('click', function() {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return $.ajax(apiUrl, {
      dataType: 'json'
    }).done(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).fail(function(e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return $.ajax(url, {
      dataType: 'json'
    }).done(function(details) {
      item.id = details.id;
      item.imageUrl = details.sprites.front_default;
      item.imageUrlBack = details.sprites.back_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
      item.abilities = details.abilities;
    }).fail(function(e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    loadDetails(item).then(function() {
      showModal(item);
    });
  }

  function showModal(item) {
    modalContainer.empty(); // Clear existing modal content

    let modal = $('<div>').addClass('modal'); // Create a new modal div

    let closeButtonElement = $('<button>').addClass('modal-close').text('Close');
    closeButtonElement.on('click', hideModal);

    $('.modal-title').html(item.name);

    $('.modal-body').html(`
    <h6># ${item.id}</h6>
    <img src=${item.imageUrl} width="96" height="96">
    <img src=${item.imageUrlBack} width="96" height="96">
    <p><strong>Height</strong>: ${item.height}</p>
    <p><strong>Weight</strong>: ${item.weight}</p>
    <p><strong>Type</strong>: ${item.types.map(type => type.type.name).join(', ')}</p>
    <p><strong>Abilities</strong>: ${item.abilities.map(ability => ability.ability.name).join(', ')}</p>
    `);
  }

  function hideModal() {
    modalContainer.removeClass('is-visible');
  }

  $(window).on('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer.hasClass('is-visible')) {
      hideModal();
    }
  });

  modalContainer.on('click', function(e) {
    if (e.target === modalContainer[0]) {
      hideModal();
    }
  });

  return {
    loadList: loadList,
    getAll: getAll,
    addListItem: addListItem,
    loadDetails: loadDetails,
    add: add,
    showDetails: showDetails
  }

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});