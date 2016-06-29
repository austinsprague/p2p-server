exports.up = function(knex, Promise) {
  return knex.schema.createTable('p2p-user-project-backed', function(table) {
    table.increments();
    table.string('user_id');
    table.string('project_id');
    table.integer('amount_pledged');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('p2p-projects');
};
