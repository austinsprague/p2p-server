(function () {
  'use strict';

  angular
    .module('campaign')
    .config(config);

  function config($stateProvider, $httpProvider) {
  $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('campaign', {
        url: '/campaign',
        templateUrl: 'campaign/views/campaign.tpl.html',
        controller: 'CampaignCtrl',
        controllerAs: 'campaign'
      })
  }
}());

//# sourceMappingURL=campaign-routes.js.map
