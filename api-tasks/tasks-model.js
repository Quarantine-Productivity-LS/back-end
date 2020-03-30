const db = require('../data/dbConfig.js')

module.exports = {
  findTasks,
  findTaskById,
  addTask,
  removeTask,
  editTask
}

function findTasks () {
  return db('tasks')
}

function findTaskById (id) {
  return db('tasks')
    .select('id', 'taskName', 'description', 'duration')
    .where({ id })
    .first()
}

function addTask (task) {
  return db('tasks').insert(task, 'id')
}

function removeTask (id) {
  return db('tasks')
    .where({ id })
    .del()
}

function editTask (changes, id) {
  return db('tasks')
    .where({ id })
    .update(changes)
}
