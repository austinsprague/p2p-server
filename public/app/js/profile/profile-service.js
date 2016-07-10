(function () {
  'use strict'

  angular
  .module('profile')
  .factory('ProfileService', ProfileService);

  function ProfileService($http) {

    return {
      getUser: function(userId) {
        return $http.get('api/users/'+ userId).then(function(result) {
          return result.data;
        });
      },
      getProjects: function(userId) {
        return $http.get('api/projects/user/' + userId).then(function(result) {
          return result.data;
        })
      },
      createProject: function(userId) {
        return $http.post('api/projects/create/' + userId).then(function(result) {
          return result.data;
        })
      }
    }
  }
}());

//# sourceMappingURL=profile-service.js.map
