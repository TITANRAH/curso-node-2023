const { http } = require("../plugins");



const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await http.get(url);


    // usando callback y con el argumento callback al lado del argumento id
//   fetch(url)
//   .then((resp) => resp.json())
//   .then((pokemon) => {
//     callback(pokemon.name);
//   })
// return 'Pokemon';

//   return fetch(url)
//   .then((resp) => resp.json())
//   .then((pokemon) => pokemon.name);

// usando async await
// ahora lo mismo pero con patron adapatador
// const resp = await fetch(url);
// const pokemon = await resp.json();




return pokemon.name;

};

module.exports = getPokemonById;
