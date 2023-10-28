// la idea de esto es ocupar esta funcuion en la app
// si cambia el plugin lo camb iamos aca y ya
const { v4: uuidv4 } = require("uuid");

const getUUID = () => {
  return uuidv4();
};

module.exports = {
  getUUID,
};
