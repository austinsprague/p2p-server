exports.up = function(knex, Promise) {
  return knex.schema.createTable('userprojbacked', function(table) {
    table.increments();
    table.integer('user_id');
    table.integer('backer_id')
    table.integer('rec_stripe_cust_id');
    table.integer('charge_stripe_cust_id');
    table.integer('proj_id');
    table.integer('amt_pledged');
    table.text('date_backed');
    table.text('order_id');
    table.text('backer_token');
    table.text('funds_captured');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userprojbacked');
};
