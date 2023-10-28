const users = [
  {
    id: 1,
    name: "Jhon Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

function getUserById(id, callback) {
  const user = users.find((u) => u.id === id);

  if (!user) {
    return callback(`USUARIO NO ENCONTRADO ${id}`);
  }

  return callback(null, user);
}

module.exports = {
  getUserById,
};
