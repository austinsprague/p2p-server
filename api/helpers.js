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

function stripeAcctCharge(receiver_token, amount, destination) {
  stripe.charges.create({
    amount: amount,
    currency: 'usd',
    source: token,
    destination: destination
  }, function(err, charge) {
    console.log('charged' + charge);
    console.log('the error' + err);
  });
}

function stripeAcctRetrieve(acct_num, data) {
  stripe.accounts.retrieve(acct_num, function(err, account) {
    if (queries.UsersByAcct(acct_num)) {
      queries.Users().update(data);
    } else {
    queries.Users().insert({
      first_name: account.display_name,
      stripe_acct_id: account.id
    })
  }}).then(function(data) {
      console.log('the account is: ' ,data);
      done(null, account);
    })
  }


module.exports = {
  stripeCharge,
  stripeCustCreate,
  stripeAcctRetrieve
}
