(function () {
  'use strict';

  angular
    .module('checkout')
    .config(config);

  function config($stateProvider, stripeProvider) {

    stripeProvider.setPublishableKey('pk_test_4CENn5hY6qEoQDOLoPtBsg4Y');
    $stateProvider
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'checkout/views/checkout.tpl.html',
        controller: 'CheckoutCtrl',
        controllerAs: 'checkout'
      });
  }
}());

//# sourceMappingURL=checkout-routes.js.map
