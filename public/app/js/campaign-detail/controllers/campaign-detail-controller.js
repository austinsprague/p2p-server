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

  function CampaignDetailCtrl($state, $stateParams, CampaignDetailService, $http, $cookies) {
    var vm = this;
    vm.ended = false;
    vm.funded = false;
    vm.currentUserId = $cookies.getObject('user') || 84;
    vm.campaignId = $stateParams.id;

    CampaignDetailService.getProjectsById(vm.campaignId).then(function(data) {
      vm.projectById = data;
      vm.campaignUserId = data.user_id;
      vm.company_name = data.company_name;
      vm.img_url = data.img_url;
      vm.pitch = data.pitch;
      vm.city = data.city;
      vm.neighborhood = data.neighborhood;
      vm.target_market = data.target_market;
      vm.history = data.history;
      vm.use_of_funds = data.use_of_funds;
      vm.status = data.status;
    });

    // setInterval(FetchData(vm.ended),1000);

    vm.campaignEnd = function(){
      console.log('button clicked');
      vm.ended = true;
      vm.funded = true;
      $http.post('/api/user_projects/' + campaignId + '/transfer')
      .then(function(data){
        console.log('posted');
        return data;
      })
    };
    //   CampaignDetailService.fundCampaign($stateParams.id).then(function(){
    //     console.log('this is funded');
    //   });
    // };

    vm.createUserCharge = function(amount){
      vm.userCharge = {};
      vm.userCharge.backer_id = vm.currentUserId;
      vm.userCharge.proj_id = vm.campaignId;
      vm.userCharge.amount = amount;
      vm.userCharge.user_id = vm.campaignUserId;
      console.log('this is charge object' , vm.userCharge);


      $http.post('/api/user_projects/charge/' + vm.campaignId, vm.userCharge)
      .then(function(user){
        console.log(user);
        return user;
      })
    }
  }
}());

//# sourceMappingURL=campaign-detail-controller.js.map
