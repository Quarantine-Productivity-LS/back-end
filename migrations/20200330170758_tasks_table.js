exports.up = function (knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments()

    tbl.string('taskName', 1000).notNullable()

    tbl.string('description', 1000)

    tbl.string('duration', 120)
  })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks');
}
