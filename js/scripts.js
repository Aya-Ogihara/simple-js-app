const pokemonRepository = (function() {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  const filter = document.querySelector('#filter');

  //Filter Pokemon event
  filter.addEventListener('input', function() {
    const pokemons = document.querySelectorAll('.btn');
    const value = filter.value.toLowerCase();

    pokemons.forEach(function(pokemon) {
      if (pokemon.innerText.toLowerCase().indexOf(value) > -1) {
        pokemon.style.display = '';
      } else {
        pokemon.style.display = 'none';
      }
    });
  });


  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    const listPokemon = document.querySelector('.pokemon-list');
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('item-button');
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');
    listItem.classList.add('group-list-item');
    listItem.appendChild(button);
    listPokemon.appendChild(listItem);

    //Event listener
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      const modalBody = $('.modal-body');
      const modalTitle = $('.modal-title');

      modalBody.empty();
      modalTitle.empty();

      const nameElement = $(`<h1>${pokemon.name}</h1>`);
      const imgElement = $('<img class="modal-img">');
      imgElement.attr('src', pokemon.imageUrl);
      const weightElement = $(`<p>Weight: ${pokemon.weight}</p>`);
      const heightElement = $(`<p>Height: ${pokemon.height}</p>`);
      const typeElement = $(`<p class="text-capitalize">type: ${pokemon.types.join(', ')}</p>`);
      const abilityElement = $(`<p class="text-capitalize">type: ${pokemon.abilities.join(', ')}</p>`);

      modalTitle.append(nameElement);
      modalBody.append(imgElement);
      modalBody.append(weightElement);
      modalBody.append(heightElement);
      modalBody.append(typeElement);
      modalBody.append(abilityElement);

    });
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        const pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = [];
      for (let i = 0; i < details.types.length; i++) {
        item.types.push(details.types[i].type.name);
      }
      item.abilities = [];
      for (let i = 0; i < details.abilities.length; i++) {
        item.abilities.push(details.abilities[i].ability.name);
      }
    }).catch(function(e) {
      console.log(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
