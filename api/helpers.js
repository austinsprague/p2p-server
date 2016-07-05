var queries = require('../db/queries');
var stripe = require("stripe")(process.env.STRIPE);

function stripeCharge() {
  stripe.charges.create({
    amount: 400,
    currency: "usd",
    source: token,
    description: "Charge for test@example.com"
  }, function(err, charge) {
    console.log('this is the error:' + err);
    console.log('this is the charge' + charge);
    // asynchronously called
  });
};

function stripeCustCreate(token, email) {
  stripe.customers.create({
    source : token,
    description : email
  }).then(function(customer) {
    console.log('this is the cust ID:' + customer.id);
  })
}

function authStripeCust(key) {
  stripe.customers.create(
    { description: "example@stripe.com" },
    { api_key: process.ENV.STRIPE_SECRET } // account's access token from the Connect flow
  );
}

module.exports = {
  stripeCharge,
  stripeCustCreate,
  authStripeCust
}
