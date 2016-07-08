(function () {
  'use strict';

  angular
    .module('p2p')
    .config(config);

  function config($urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');
    $httpProvider.defaults.withCredentials = true;
  }
}());

//# sourceMappingURL=app-routes.js.map
