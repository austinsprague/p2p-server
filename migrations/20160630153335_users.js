exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('address');
    table.string('city');
    table.string('state');
    table.string('phone_num');
    table.text('background');
    table.string('email');
    table.string('pwd');
    // table.bigInteger('credit_card');
    // table.integer('cvv');
    // table.integer('exp');
    table.string('token');
    table.integer('zip');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
