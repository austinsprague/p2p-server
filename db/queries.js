var knex = require('./knex')

// Gets all Users table
function Users(){
  return knex('users');
}
function UsersById(id){
  return knex('users').where({ id: id }).select();
}
function UsersByAcct(id){
  return knex('users').where({stripe_acct_id: id}).select();
}
// gets projects table
function Projects() {
  return knex('projects');
}
// gets the user-proj-backed table
function UserProjBacked() {
  return knex('userprojbacked');
}

// gets all Users appends with proj backed data
function UserBacked() {
  return UserProjBacked().select().join('projects', 'userprojbacked.proj_id', 'projects.id');
}
//gets all Users and appends user table with corresponding projects to user ID
function UserProjects() {
  return Users().select().join('projects', 'projects.user_id', 'users.id');
}

function insertProjects(data, id) {
  console.log('this is the function', data);
  return knex('projects').insert({
    company_name: data.company_name,
    user_id: id,
    // img_url: 'http://del.h-cdn.co/assets/15/44/black-forest-cupcakes4-edit4srgb.jpg',
    desc: data.desc,
    pitch: data.pitch,
    // prod_feat: data.prod_feat,
    targ_mkt: data.targ_mkt,
    uniq_comp: data.uniq_comp ,
    history: data.history,
    use_of_funds: data.use_of_funds,
    date_created: 'today',
    date_exp: '45 days',
    status: 'active'
  }).then(function(data){
    return data;
  });
}




module.exports= {
  Users,
  Projects,
  UserProjBacked,
  UserProjects,
  UserBacked,
  UsersById
};
