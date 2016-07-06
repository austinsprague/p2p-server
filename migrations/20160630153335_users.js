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
    table.integer('zip');
    table.text('stripe_acct_id');
    table.text('stripe_cust_id');
    table.text('stripe_card_id')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
