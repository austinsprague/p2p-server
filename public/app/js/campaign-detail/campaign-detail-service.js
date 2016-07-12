(function () {
  'use strict'

  angular
  .module('campaignDetail')
  .factory('CampaignDetailService', CampaignDetailService);

  function CampaignDetailService($http) {

    return {
      getProjectsById: function(id) {
        return $http.get('/api/projects/'+ id).then(function(result) {
          return result.data;
        });
      },
      getUsers: function() {
        return $http.get('/api/users').then(function(users) {
          return users.data;
        });
      },
      getUserById: function(id) {
        return $http.get('/api/users/'+ id).then(function(user){
          return user.data;
        });
      },
      getBackedInfo: function(proj_id) {
        return $http.get('/api/user_projects/backed/'+ proj_id).then(function(data){
          return data.data;
        });
      },
      createUserCharge: function(backer_id,proj_id,amount,user_id){
        console.log('charged');
        var userCharge = {};
        userCharge.backer_id = 1;
        userCharge.proj_id = projId;
        userCharge.amount = 1000;
        userCharge.user_id = 1;

        return $http.post('/api/user_projects/' + userCharge.proj_id + '/charge', vm.userCharge)
        .then(function(user){
          return user;
        })
      },
      fundCampaign: function (proj_id) {
        return $http.post('/api/user_projects/' + proj_id + '/transfer')
        .then(function(data){
          return data;
        })
      }
    }
  };
}());

//# sourceMappingURL=campaign-detail-service.js.map
