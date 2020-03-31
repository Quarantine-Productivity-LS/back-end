
exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: "admin6",
      password: "pass"
    }
  ]);
};
