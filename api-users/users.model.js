const db = require('../data/dbConfig.js')

module.exports = {
  findUsers,
  findUserBy,
  findUserById,
  deleteUser,
  register
}

function findUsers () {
  return db('users')
}

function findUserBy (filter) {
  return db('users')
    .select('username', 'password')
    .where(filter)
}

function findUserById (id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

function deleteUser (id) {
  return db('users')
    .where({ id })
    .del()
}

function register (user) {
  return db('users').insert(user, 'id')
}
