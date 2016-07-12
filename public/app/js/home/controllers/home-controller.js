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

  function HomeCtrl($state, $cookies, $http, $scope) {
    var vm = this;
    var loggedin = true;


    // function currentUser(){
    //   return $http.get('api/').then(function(user){
    //     console.log('this ist he api call:', user);
    //     // loggedin = !loggedin;
    //     // if (loggedin) {
    //       $cookies.putObject('user', user.data);
    //     // } else {
    //     //   $cookies.remove('user')
    //     // }
    //   })
    // }
  }
}());

//# sourceMappingURL=home-controller.js.map
