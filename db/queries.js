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

module.exports= {
  Users,
  Projects,
  UserProjBacked
};
