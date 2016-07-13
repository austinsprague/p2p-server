(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name nav.controller:NavCtrl
   *
   * @description
   *
   */

  angular
    .module('nav')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl($scope, $state, $cookies, ProfileService) {
    $scope.isLoggedIn = function() {
      var sessionCookie= $cookies.get('session');
      if (sessionCookie == null || sessionCookie == undefined) {
        console.log('false');
        return false;
      }
      var parsedCookie = JSON.parse(atob(sessionCookie));
      console.log(parsedCookie);
      console.log(parsedCookie.passport.user.id);
      $scope.loggedIn = true;
      console.log('true');
      $scope.userId = parsedCookie.passport.user.id;
      $scope.userDisplayName = parsedCookie.passport.user.display_name;
      return true;
    }
  }
}());

//# sourceMappingURL=nav-controller.js.map
