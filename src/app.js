// const {emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring')
// const { getUserById } = require("./js-foundation/03-callbacks");

const getPokemonById = require('./js-foundation/06-promise');

// USANDO CALBACK PARA OBTENER NOMBRE POKEMON
// getPokemonById(2,(pokemon) => {
//     console.log({pokemon});
// })

getPokemonById(2)
    .then((pokemon) => console.log(pokemon))
    .catch((error) => console.log(error))


// PATRON ADAPTADOR FUNCION FACTORY
// const { getUUID, getAge } = require("./plugins");

// const { buildMakePerson } = require("./js-foundation/05-factory");

// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//   name: "Jhon",
//   birthDate: "1985-10-12",
// };

// const jhon = makePerson(obj);

// console.log({ jhon });
// FIN PATRON ADAPTADOR FUNCION FACTORY1


// CALLBACKS
// const id = 1;

// getUserById(id,  (error, user) => {
//   if (error) throw new Error(error);

//   console.log({user});
// });

// console.log(emailTemplate);
// FIN CALLBACKS


