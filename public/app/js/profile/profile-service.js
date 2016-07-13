(function () {
  'use strict'

  angular
  .module('profile')
  .factory('ProfileService', ProfileService);

  function ProfileService($http, $cookies) {

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
      createCampaign: function(campaign, userId) {
        $http.post('api/projects/insert/' + userId, campaign).then(function(result) {
          return result.data;
        })
      },
      getBackedProj: function(id) {
        return $http.get('/api/profile/backed/'+ id).then(function(data){
          return data.data;
        });
      },
      getCurrentUser: function() {
        var sessionCookie= $cookies.get('session');
        if (sessionCookie == null || sessionCookie == undefined) {
          return null;
        }
        var parsedCookie = JSON.parse(atob(sessionCookie));
        console.log(parsedCookie.passport.user.id);
        return parsedCookie.passport.user.id;
      }
    }
  }
}());

//# sourceMappingURL=profile-service.js.map
