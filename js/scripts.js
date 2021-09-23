const pokemonRepository = (function () {
  const pokemonList = [{
    name: 'Bulbasaur',
    nameInJapanese: 'フシギダネ',
    knownAs: 'Seed Pokémon',
    height: 0.7,
    type: ['grass', 'poison']
  }, {
    name: 'Charmander',
    nameInJapanese: 'ヒトカゲ',
    knownAs: 'Lizard Pokémon',
    height: 0.6,
    type: 'fire'
  }, {
    name: 'Squirtle',
    nameInJapanese: 'ゼニガメ',
    knownAs: 'Young Turtle Pokémon',
    height: 0.5,
    type: 'water'
  }, {
    name: 'Pikachu',
    nameInJapanese: 'ピカチュウ',
    knownAs: 'Mouse Pokémon',
    height: 0.4,
    type: 'electric'
  }];

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
    listItem.appendChild(button);
    listPokemon.appendChild(listItem);

    // Event listener
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

})();

pokemonRepository.getAll().forEach(function(pokemon) {

  pokemonRepository.addListItem(pokemon);

});
