(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name campaign.controller:CampaignCtrl
   *
   * @description
   *
   */
  angular
    .module('campaign')
    .controller('CampaignCtrl', CampaignCtrl);

  function CampaignCtrl($state, CampaignService) {
    var vm = this;
    vm.user_id = 1;

    CampaignService.getProjects().then(function(data){
      vm.projects = data;
    });
  }
}());

//# sourceMappingURL=campaign-controller.js.map
