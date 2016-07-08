(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;
    vm.ctrlName = 'HomeCtrl';

    vm.css = 'home';
  }
}());

//# sourceMappingURL=home-controller.js.map
