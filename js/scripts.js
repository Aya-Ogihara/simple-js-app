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
    pokemonList.push(pokemon)
  }

  return {
    getAll: getAll,
    add: add
  };

})();

pokemonRepository.getAll().forEach(function(pokemon) {

let listPokemon = document.querySelector('.pokemon-list');
let listItem = document.createElement('li');
let button = document.createElement('button');
button.innerText = pokemon.name;
button.classList.add('list-item')
listItem.appendChild(button);
listPokemon.appendChild(listItem);

});


// for (let i = 0; i < pokemonList.length; i++) {
//   if (pokemonList[i].height > 0.6) { //print an extra comment '- Wow, that's big!' at end
//     document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!</p>');
//   } else {
//     document.write('<p>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')</p>');
//   }
// }
//


/* Task 1-1
alert('Hello world');

let favoriteFood = 'chocolate';
document.write(favoriteFood);
*/
