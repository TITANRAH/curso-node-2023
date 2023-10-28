// la idea de esto es ocupar esta funcuion en la app
// si cambia el plugin lo camb iamos aca y ya

const getAgePlugin = require("get-age");

const getAge = (birthDate) => {
  if (!birthDate) return new Error("birthDate is required");

  return getAgePlugin(birthDate);
};

module.exports = {
  getAge,
};
