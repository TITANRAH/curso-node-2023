console.log(process.env);

const { SHELL, HOMEPATH } = process.env;

console.table({ SHELL, HOMEPATH });

const characters = ["Flash", "Superman", "Batman", "Robin"];

// DESTRUCTURACION DE ARREGLOS
const [, , , robin] = characters;

console.log(robin);
