const players = [
    {number: 1, fullname: 'Ozzie Albies'},
    {number: 28, fullname: 'Matt Olson'},
    {number: 27, fullname: 'Austin Riley'}
];

exports.players = players;

exports.seed = function (knex) {
  return knex('players').insert(players);
};
