(function () {
  'use strict';

  angular
    .module('campaignDetail')
    .config(config);

    function config($stateProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('campaignDetail', {
        url: '/campaign-detail/:id',
        templateUrl: 'campaign-detail/views/campaign-detail.tpl.html',
        controller: 'CampaignDetailCtrl',
        controllerAs: 'campaignDetail'
      });
  }
}());

//# sourceMappingURL=campaign-detail-routes.js.map
