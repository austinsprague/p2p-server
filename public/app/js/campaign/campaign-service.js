(function () {
  'use strict'

  angular
  .module('campaign')
  .factory('CampaignService', CampaignService);

  function CampaignService($http) {

    return {
      getProjects: function() {
        return $http.get('/api/projects', {withCredentials: true}).then(function(result) {
          return result.data;
        });
      }
      // getUsers: function() {
      //   return $http.get('/api/users').then(function(users) {
      //     return users.data;
      //   });
      // }
    }
  };
}());

//# sourceMappingURL=campaign-service.js.map
