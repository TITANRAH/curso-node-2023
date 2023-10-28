// renombrar v4: uuidv4
// const {getId, getAge} = require('../plugins')

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthDate }) => {
    return {
      id: getUUID(),
      name: name,
      birthDate: birthDate,
      age: getAge(birthDate),
    };
  };
};

// const obj = {
//   name: "Jhon",
//   birthDate: "1985-10-12",
// };

// // le mando el objeto y en la funcion desestructuro

// const jhon = buildPerson(obj);

// console.log(jhon);

module.exports = {
  buildMakePerson,
};
