(function () {
  'use strict';

  angular
    .module('profile')
    .config(config);

  function config($stateProvider) {
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
