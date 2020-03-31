exports.up = function (knex) {
  return knex.schema.createTable('tasks', tbl => {
    tbl.increments()

    tbl.string('taskName', 1000).notNullable()

    tbl.string('description', 1000)

    tbl.string('tags', 1000)

    tbl.string('due', 128)

    tbl.integer('duration', 1000)

    tbl.boolean('completed', 128).defaultTo(false)
  })
}

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks');
}
