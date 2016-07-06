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
  return stripe.customers.create({
    source : token,
    description : email
  })
}

function authStripeCust(key) {
  stripe.customers.create(
    { description: "example@stripe.com" },
    { api_key: process.ENV.STRIPE_SECRET }
  );
}

module.exports = {
  stripeCharge,
  stripeCustCreate,
  authStripeCust
}
