
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      taskName: "Read a chapter out of your favorite book.",
      description: "Pick up the dusty book on your shelf and read a chapter out of it!",
      tags: 'reading, lounging, learning, studying',
      due: "2020-04-13",
      duration: 45,
      completed: false
    }
  ]);
};
