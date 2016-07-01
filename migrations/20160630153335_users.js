exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('name');
    table.string('address');
    table.integer('phone_num');
    table.text('background');
    table.string('username');
    table.string('password');
    table.integer('credit_card');
    table.integer('cvv');
    table.integer('exp');
    table.integer('zip');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
