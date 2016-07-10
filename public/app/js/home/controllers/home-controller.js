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

  function HomeCtrl($state, $stateParams, $cookies, $http) {
    var vm = this;
    var loggedin = true;
    // vm.getCookies = $cookies.get('session');
    // console.log(vm.getCookies);
    vm.allCookies = $cookies.getAll();
    console.log(vm.allCookies);
    var cookies = $cookies.getObject('user');
    console.log('the cookies', cookies);


    (function currentUser(){
      return $http.get('api/').then(function(user){
        // loggedin = !loggedin;
        if (loggedin) {
          $cookies.putObject('user', user.data);
        } else {
          $cookies.remove('user')
        }
      })
    }());

    // vm.login = function(){
    //   loggedin = !loggedin;
    //   if (loggedin) {
    //     $cookies.put('session', '{id:15, display_name:austin_s}');
    //     vm.cookieValue = $cookies.get('session');
    //     console.log(vm.cookieValue);
    //   } else {
    //
    //   }
    // }
    // //
    // $cookieStore.put('user', '');
    // vm.cookieValue = $cookieStore.get('session');
    // console.log(vm.cookieValue);


    // $cookieStore.session= 'hello';
    // alert(vm.$cookieStore.session);
    //
    // vm.lastVal = vm.$cookieStore.get('session');
    // console.log(vm.lastVal);

      // $scope.changeTab = function(tabName){
      // $scope.lastVal = tabName;
      // $cookieStore.put('tab', tabName);


  }
}());

//# sourceMappingURL=home-controller.js.map
