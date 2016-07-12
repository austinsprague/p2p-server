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
    vm.currentUserId = $cookies.getObject('user') || 1;
    vm.campaignId = $stateParams.id;

    CampaignDetailService.getProjectsById(vm.campaignId).then(function(data) {
      vm.projectById = data;
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
      for (var i = 0; i < data.length; i++) {
        vm.amtPledged = data[i].amt_pledged;
      }
    })

    vm.createUserCharge = function(amount){
      vm.userCharge = {};
      vm.userCharge.backer_id = vm.currentUserId;
      vm.userCharge.proj_id = vm.campaignId;
      vm.userCharge.amount = amount;
      vm.userCharge.user_id = vm.campaignUserId;
      console.log('this is charge object' , vm.userCharge);


      $http.post('/api/user_projects/charge/' + vm.campaignId, vm.userCharge)
      .then(function(user){
        console.log('this is user', user);
        // vm.amtPledged = vm.amtPledged + parseInt(user.data.amount);
        // vm.backerCount = vm.backerCount + 1;
        $state.go('profile')
        // return user;
      })
    }
  }
}());

//# sourceMappingURL=campaign-detail-controller.js.map
