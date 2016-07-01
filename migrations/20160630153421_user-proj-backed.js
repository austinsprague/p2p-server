exports.up = function(knex, Promise) {
  return knex.schema.createTable('user-proj-backed', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('project_id');
    table.integer('amount_pledged');
    table.string('date_backed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user-proj-backed');
};
