let pokemonList = [{
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

pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 0.6) { //print an extra comment '- Wow, that's big!' at end
      document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!</p>');
    } else {
      document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')</p>');
    }
  }
);


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
