(function () {
  'use strict'

  angular
  .module('signup')
  .factory('SignupService', SignupService);

  function SignupService(stripe, $http) {

    function newUser(first_name, last_name, address, city, state, phone_num, email, pwd, token) {
      this.first_name = first_name;
      this.last_name= last_name;
      this.address= address;
      this.city= city;
      this.state= state;
      this.phone_num= phone_num;
      this.background= background;
      this.email= email;
      this.pwd= pwd;
      this.zip= zip;
      this.token= token;
    }

    return {
      createUser: function (user) {
        return $http.post('/api/signup', user).then(function(data) {
          return data;
        })
      },
      signupUser: function(user) {
        // user = {};
        stripe.card.createToken({
          number: user.ccnumber,
          cvc: user.cvc,
          exp_month: user.exp_month,
          exp_year: user.exp_year
        }, stripeResponseHandler);

        function stripeResponseHandler(status, res) {
          user.token = {token: res.id};
          $http.post('/api/user_projects/charge', user.token)
            .then(function(data){
              console.log(data);
            }, function (err) {
              console.log(err);
            });
          }
        return user;
        },
        // authUser: function(user) {
        //   return $http.get('/auth/stripe')
        // },
        loggedIn: function() {
          return $http.get('/users/loggedIn')
        }
      }
    }
}());

//# sourceMappingURL=signup-service.js.map
