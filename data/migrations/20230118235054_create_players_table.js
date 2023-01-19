exports.up = function(knex) {
  return knex.schema
    .createTable('players', function(players) {
    players.increments()
    players.string('fullname')
        .notNullable()
    players.integer('number')
        .notNullable()
  })
};

exports.down = function(knex) {
 return knex.schema
    .dropTableIfExists('players')
  }
