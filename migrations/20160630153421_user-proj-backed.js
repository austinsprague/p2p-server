exports.up = function(knex, Promise) {
  return knex.schema.createTable('userprojbacked', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('proj_id');
    table.integer('backer_id');
    table.integer('amt_pledged');
    table.string('date_backed');
    table.string('order_id');
    table.string('backer_token');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userprojbacked');
};
