exports.up = function(knex, Promise) {
  return knex.schema.createTable('p2p-projects', function(table) {
    table.increments();
    table.string('company_name');
    table.string('user_id')
    table.string('img_url');
    table.string('desc');
    table.string('pitch');
    table.string('idea_problem');
    table.string('idea_solution');
    table.string('product_features');
    table.string('product_use_cases');
    table.string('target_market');
    table.string('unique_comp');
    table.string('revenue_streams');
    table.string('distribution');
    table.string('history');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('p2p-projects');
};
