var knex = require('./knex')

function Users(){
  return knex('users');
}

function Projects() {
  return knex('projects');
}

function UserProjBacked() {
  return knex('user-proj-backed');
}

function UserProjects() {
  return Users().select().join('projects', 'projects.user_id', 'users.id').orderBy('projects.id').as('project_id');
}


module.exports= {
  Users,
  Projects,
  UserProjBacked,
  UserProjects
};
