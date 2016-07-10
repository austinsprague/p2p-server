(function () {
  'use strict';

  /* @ngdoc object
   * @name p2p
   * @description
   *
   */
  angular
    .module('p2p', [
      'ngAria',
      'ui.router',
      'home',
      'campaign',
      'checkout',
      'angular-stripe',
      'campaignDetail',
      'signup',
      'profile',
      'ngCookies'
    ])
    // .controller('NavCtrl',['$scope', '$location', function($scope, $location){
    //   $scope.buttons = [
    //     {ui-sref: '/profile'}
    //   ]
    // }])
}());

//# sourceMappingURL=app-module.js.map
