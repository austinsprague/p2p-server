(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name checkout.controller:CheckoutCtrl
   *
   * @description
   *
   */
  angular
    .module('checkout')
    .controller('CheckoutCtrl', CheckoutCtrl);

  function CheckoutCtrl($state, stripe, $http) {

    var vm = this;

    vm.user = {};
    vm.createUser = function(user) {
      stripe.card.createToken({
        number: vm.user.ccnumber,
        cvc: vm.user.cvc,
        exp_month: vm.user.exp_month,
        exp_year: vm.user.exp_year
      }, stripeResponseHandler);

      function stripeResponseHandler(status, res) {
        vm.user.token = {token: res.id};
        $http.post('/api/user_projects/charge', vm.user.token)
          .then(function(data){
            console.log(data);
          }, function (err) {
            console.log(err);
          });
      }
    };
  };
}());

//# sourceMappingURL=checkout-controller.js.map
