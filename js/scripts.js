const pokemonRepository = (function() {
  const pokemonList = [];
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  const modalContainer = document.querySelector('#modal-container');

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
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.classList.add('btn-lg');
    listItem.classList.add('group-list-item');
    listItem.appendChild(button);
    listPokemon.appendChild(listItem);

    //Event listener
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

  }


  function showDetails(pokemon) {
    loadDtails(pokemon).then(function() {

      // modal outline
      const modal = document.createElement('div');
      modal.classList.add('modal');

      // modal contents
      const closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'X';
      closeButtonElement.addEventListener('click', hideDetails);

      const titleElement = document.createElement('h1');
      titleElement.innerText = pokemon.name;

      const contentElement = document.createElement('p');
      contentElement.innerText = 'Height: ' + pokemon.height;

      const imgElement = document.createElement('img');
      imgElement.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(imgElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
    });
  }

  function hideDetails() {
    modalContainer.classList.remove('is-visible');

    // Clear exisiting content in the modalContainer
    modalContainer.innerHTML = ' ';
  }
  // Hide the modal by press 'Esc' key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideDetails();
    }
  })

  // Hide modal by clicking outside of the modal
  modalContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target === modalContainer) {
      hideDetails();
    }
  });

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

  function loadDtails(item) {
    const url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function(e) {
      console.log(e);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    hideDetails: hideDetails,
    loadList: loadList,
    loadDtails: loadDtails
  };

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
