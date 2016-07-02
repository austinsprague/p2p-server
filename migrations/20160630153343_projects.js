exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();
    table.string('company_name');
    table.integer('user_id');
    table.text('img_url');
    table.text('desc');
    table.text('pitch');
    table.text('idea_problem');
    table.text('idea_solution');
    table.text('product_features');
    table.text('product_use_cases');
    table.text('target_market');
    table.text('unique_comp');
    table.text('history');
    table.text('use_of_funds');
    table.string('date_created');
    table.string('date_expires');
    table.string('status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
