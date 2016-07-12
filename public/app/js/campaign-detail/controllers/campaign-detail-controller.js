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
    vm.currentUserId = $cookies.get('thesession');
    console.log('the cookies:', currentUserId);
    vm.campaignId = $stateParams.id;

    CampaignDetailService.getProjectsById(vm.campaignId).then(function(data) {
      vm.projectById = data;
      console.log(vm.projectById);
      vm.campaignUserId = data.user_id;
      vm.company_name = data.company_name;
      vm.img_url = data.img_url;
      vm.category = data.category;
      vm.neighborhood = data.neighborhood;
      vm.status = data.status;
      vm.info = [];
      angular.forEach(data, function(value, key) {
        var titles = ['pitch', 'targ_mkt','uniq_comp', 'history', 'use_of_funds']
        if (value && titles.includes(key)) {
          var obj = {
            title: key.replace(/_/g, " "),
            details: value
          }
          this.push(obj);
        }
      }, vm.info);
    });
    CampaignDetailService.getBackedInfo(vm.campaignId).then(function(data){
      vm.backerCount = data.length;
      vm.amtPledged = 0;
      for (var i = 0; i < data.length; i++) {
        vm.amtPledged += data[i].amt_pledged;
      }
    })

    vm.createUserCharge = function(amount){
      vm.userCharge = {};
      vm.userCharge.backer_id = vm.currentUserId;
      vm.userCharge.proj_id = vm.campaignId;
      vm.userCharge.amount = amount;
      vm.userCharge.user_id = vm.campaignUserId;

      $http.post('/api/user_projects/charge/' + vm.campaignId, vm.userCharge)
      .then(function(user){
        console.log('this is user', user);
        $state.go('profile');
      })
    }
  }
}());

//# sourceMappingURL=campaign-detail-controller.js.map
