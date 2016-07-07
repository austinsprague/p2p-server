var queries = require('../db/queries');
var stripe = require("stripe")(process.env.STRIPE);
var account_id = process.env.PLATFORM_ACCOUNT_ID;

function stripeCharge(customer) {
  stripe.charges.create({
    amount: 400,
    currency: "usd",
    source: token,
    description: "Charge for test@example.com"
  }, function(err, charge) {
    console.log('this is the error:' + err);
    console.log('this is the charge' + charge);
  });
};

function stripeCustCreate(token, email) {
  return stripe.customers.create({
    source : token,
    description : email
  })
}


module.exports = {
  stripeCharge,
  stripeCustCreate
}
