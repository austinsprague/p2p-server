var knex = require('./knex')

// function UserById(){
//   return knex('users').where({id: req.params.id});
// }
function UserProjectsById(){
  return knex('users').where({id: req.params.id}).first().then(function(user) {
    console.log(user);
  });
}
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
  return Users().select().join('projects', 'projects.user_id', 'users.id');
}


module.exports= {
  Users,
  Projects,
  UserProjBacked,
  UserProjects,
  UserProjectsById
};
