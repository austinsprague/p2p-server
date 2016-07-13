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
    .directive('navbar', navbar);

  function navbar() {
    return {
      restrict: 'E',
      templateUrl: 'nav/views/nav.tpl.html',
      controller: 'NavCtrl'
    }
  }
}());

//# sourceMappingURL=nav-directive.js.map
