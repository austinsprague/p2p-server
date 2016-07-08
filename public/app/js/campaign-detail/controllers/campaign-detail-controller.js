(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name campaignDetail.controller:CampaignDetailCtrl
   *
   * @description
   *
   */
  angular
    .module('campaignDetail')
    .controller('CampaignDetailCtrl', CampaignDetailCtrl);

  function CampaignDetailCtrl($state, $stateParams, CampaignDetailService, $http) {
    var vm = this;
    vm.ended = false;
    vm.funded = false;

    CampaignDetailService.getProjectsById($stateParams.id).then(function(data) {
      vm.projectById = data;
      vm.company_name = data.company_name;
      vm.img_url = data.img_url;
    });

    // setInterval(FetchData(vm.ended),1000);

    vm.campaignEnd = function(){
      console.log('button clicked');
      vm.ended = true;
      vm.funded = true;
      $http.post('/api/user_projects/' + $stateParams.id + '/transfer')
      .then(function(data){
        console.log('posted');
        return data;
      })
    };
    //   CampaignDetailService.fundCampaign($stateParams.id).then(function(){
    //     console.log('this is funded');
    //   });
    // };

    vm.createUserCharge = function(){
      vm.userCharge = {};
      vm.userCharge.backer_id = 6;
      vm.userCharge.proj_id = 4;
      vm.userCharge.amount = 1000;
      vm.userCharge.user_id = 3;

      $http.post('/api/user_projects/' + vm.userCharge.proj_id + '/charge', vm.userCharge)
      .then(function(user){
        console.log('posted');
        return user;
      })
    }
  }
}());

//# sourceMappingURL=campaign-detail-controller.js.map
