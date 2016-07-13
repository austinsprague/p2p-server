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

  function HomeCtrl($state, $cookies, $http) {
    var vm = this;
    var loggedin = true;

    vm.info1 = 'In the 1980s, small businesses, firms with fewer than 100 employees, generated 58% of net new jobs, according to the Census Bureau. That figure slipped to 49% in the 1990s. Today only 31% of net job growth comes from small businesses.'
    vm.info2 = 'There has been a substantial reduction in bank lending to small-buisnesses through SBA loan programs. This has led to a shift toward nonbank lenders working through web portals. This type of financing has double every year since the mid-2000s.'
    vm.info3 = 'But what if we can create our own sustainable economy right in our backyard. You know better than any financial institution about your hometown local businesses, and the people that run them.'

    function currentUser(){
      return $http.get('api/').then(function(user){
        console.log('this ist he api call:', user);
        // loggedin = !loggedin;
        // if (loggedin) {
          $cookies.putObject('user', user.data);
        // } else {
        //   $cookies.remove('user')
        // }
      })
    }
  }
}());

//# sourceMappingURL=home-controller.js.map
