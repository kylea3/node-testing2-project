/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.table('players', function(table) {
    table.increments()
    table.string('fullname')
        .notNullable()
    table.integer('number')
        .notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema
    .dropTableIfExists('users')
  }
