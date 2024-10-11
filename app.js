const pokemon = require('./data.js');

const game = {
  //exercise #3
  difficulty: "very hard",
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  //exercise #4:
  starterPokemon: pokemon.filter(pokemon => pokemon.starter),
};
const firstStarterPokemon = game.starterPokemon[0];
game.party.push(firstStarterPokemon);

//exercise #5
const desiredTypes = ["fire", "water", "electric"];
const minHP = 70;
function selectPokemon(type, minHP) {
  return pokemon.filter(pokemon => pokemon.type === type && pokemon.hp >= minHP);
}

//Exercise #1:
console.log(pokemon[58].name);
//Exercise #2:
//console.log(game);

// discovered flatMap seaching for combo function type and min
const selectedPokemon = desiredTypes.flatMap(type => selectPokemon(type, minHP));
const maxPartySize = 6;
const addedPokemon = selectedPokemon.slice(0, maxPartySize - game.party.length);
game.party.push(addedPokemon);

// could also used null set
// const selectedPokemon = [];
// for (const type of desiredTypes) {
//   const pokemonOfType = selectPokemon(type, minHP);
//   selectedPokemon.push(pokemonOfType);
// }

//exercise #6
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

//exercise #7 
const starterIndex = game.party.findIndex(pokemon => pokemon.starter);
const evolvedPokemon = pokemon.find(pokemon => pokemon.name === 'Ivysaur' || pokemon.name === 'Charmeleon' || pokemon.name === 'Wartortle' || pokemon.name === 'Raichu');
game.party.splice(starterIndex, 1, evolvedPokemon);
game.party.forEach(pokemon => {
  console.log(pokemon.name);
})
pokemon.filter(pokemon => pokemon.starter).forEach(starter => {
  console.log(starter.name);
});
game.catchPokemon = function(pokemonObj) { 
  game.party.push(pokemonObj);
};
const pikachu = pokemon.find(pokemon => pokemon.name === 'Pikachu');
game.catchPokemon(pikachu)
console.log("Updated party:", game.party);
game.gyms.forEach(gym => {
  if (gym.difficulty < 6) {
    gym.completed = true;
  }
});   

//for (let i=0; i <selectPokemon.length; i++)

game.gymStatus = function() {
  const gymTally = { completed: 0, incomplete: 0 };

  game.gyms.forEach(gym => {
    if (gym.completed) {
      gymTally.completed++;
    } else {
      gymTally.incomplete++;
    }
  });

  console.log("Gym status:", gymTally);
};

// Call the method to display the tally
game.gymStatus();

game.partyCount = function() {
  return game.party.length;
};

// Example usage:
const partySize = game.partyCount();
console.log("Number of Pokemon in your party:", partySize);

game.gyms.forEach(gym => {
  if (gym.difficulty < 8) {
    gym.completed = true;
  }
});

console.log("Updated gym statuses:", game.gyms);

console.log("Final game state:", game);