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
    }
  };
}());

//# sourceMappingURL=campaign-service.js.map
