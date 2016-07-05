var queries = require('../db/queries');
var stripe = require('stripe')(process.env.STRIPE);

function stripeCharge() {
  stripe.charges.create({
  amount: 400,
  currency: "usd",
  source: 'tok_18ToCu2eZvKYlo2Cal1oJhFK',
  description: "Charge for test@example.com"
  }, {
    idempotency_key: "axJl84KiKqBHMxM7"
  }, function(err, charge) {
    // console.log(err);
    // console.log(charge);
  // asynchronously called
  }
)};

function stripeCustCreate(res, req) {
  stripe.customers.create({
    source : 'tok_18TmTs2eZvKYlo2CtepEnJDq',
    description : 'holy@moly.com', // customer's email (get it from db or session)
  }).then(function(customer) {
    return stripe.charges.create({
      amount: 1000,
      currency: "usd",
      customer: customer.id
    }).then(function(charge) {
      // console.log('charged ' + charge);
    });
  })
}


module.exports = {
  stripeCharge,
  stripeCustCreate
}
