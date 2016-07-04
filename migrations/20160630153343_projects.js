exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table) {
    table.increments();
    table.string('company_name');
    table.integer('user_id');
    table.text('img_url');
    table.text('desc');
    table.text('pitch');
    table.text('idea_prob');
    table.text('idea_sol');
    table.text('prod_feat');
    table.text('prod_use_cases');
    table.text('targ_mkt');
    table.text('uniq_comp');
    table.text('history');
    table.text('use_of_funds');
    table.string('date_created');
    table.string('date_exp');
    table.string('status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
