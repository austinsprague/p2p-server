var queries = require('../db/queries');
var stripe = require("stripe")("sk_test_VAbPVNDFCIbiKiFovceDQAAt");

function stripeCharge() {
  stripe.charges.create({
  amount: 400,
  currency: "usd",
  source: 'tok_18TmTs2eZvKYlo2CtepEnJDq',
  description: "Charge for test@example.com"
  }, {
    idempotency_key: "axJl84KiKqBHMxM7"
  }, function(err, charge) {
    console.log(err);
    console.log(charge);
  // asynchronously called
  }
)};

function stripeCustCreate(res, req) {
  stripe.customers.create({
    card : 'tok_18TmTs2eZvKYlo2CtepEnJDq',
    email : 'holy@moly.com', // customer's email (get it from db or session)
    plan : "peer2peer"
  }, function (err, cust) {
    if (err) {
      var msg = "unknown error";
      // res.send("Error while processing your payment: " + msg);
      console.log("Error while processing your payment: " + msg);
    }
    else {
      var id = cust.id;
      console.log('Success! Customer with Stripe ID ' + id + ' just signed up!');
      // save this customer to your database here!
      // res.send('ok');
    }
  });
}


module.exports = {
  stripeCharge,
  stripeCustCreate
}
