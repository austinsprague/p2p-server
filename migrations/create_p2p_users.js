exports.up = function(knex, Promise) {
  return knex.schema.createTable('p2p-users', function(table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.string('phone_num');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('p2p-projects');
};
