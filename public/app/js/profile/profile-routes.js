(function () {
  'use strict';

  angular
    .module('profile')
    .config(config);

  function config($stateProvider, $httpProvider) {
    $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/views/profile.tpl.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      });
  }
}());

//# sourceMappingURL=profile-routes.js.map
