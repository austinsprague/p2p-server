var knex = require('./knex')

// Gets all Users table
function Users(){
  return knex('users');
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




module.exports= {
  Users,
  Projects,
  UserProjBacked,
  UserProjects,
  UserBacked
};
