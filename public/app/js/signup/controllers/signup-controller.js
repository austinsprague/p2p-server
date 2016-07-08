(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name signup.controller:SignupCtrl
   *
   * @description
   *
   */
  angular
    .module('signup')
    .controller('SignupCtrl', SignupCtrl);

  function SignupCtrl($state, SignupService, stripe, $http) {
    var vm = this;

    vm.user = {};
    vm.createUser = function(user) {
      stripe.card.createToken({
        number: vm.user.ccnumber,
        cvc: vm.user.cvc,
        exp_month: vm.user.exp_month,
        exp_year: vm.user.exp_year
      }, stripeResponseHandler);

      vm.sendUser = {
        first_name: vm.user.first_name,
        last_name: vm.user.last_name,
        address: vm.user.address,
        city: vm.user.city,
        state: vm.user.state,
        phone_num: vm.user.phone_num,
        email: vm.user.email,
        zip: vm.user.zip,
        token: '',
        stripe_card_id:''
      }

      function stripeResponseHandler(status, res) {
        console.log(res.card.id);
        vm.sendUser.token = res.id;
        vm.sendUser.stripe_card_id = res.card.id;
        $http.post('/api/signup', vm.sendUser)
          .then(function(data){
            console.log(data);
          }, function (err) {
            console.log(err);
          });
        }
      }
    }
}());

//# sourceMappingURL=signup-controller.js.map
