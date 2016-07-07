var queries = require('../db/queries');
var stripe = require("stripe")(process.env.STRIPE);
var account_id = process.env.PLATFORM_ACCOUNT_ID;


function stripeCharge(backer) {
  // console.log(backer.backer_id);
  // console.log(backer.amount);
  return queries.Users().select('stripe_cust_id').where({id: backer.backer_id}).first().then(function(custId){
    // console.log(custId.stripe_cust_id);
    return stripe.charges.create({
      amount: backer.amount,
      currency: "usd",
      customer: custId.stripe_cust_id,
      description: "Charge for test@example.com",
      capture: false
    })
    .then(function(data){
      return queries.UserProjBacked().insert({
        user_id: data.customer.id, // change user_id to stripe_cust_id
        proj_id: backer.proj_id,
        amt_pledged: data.amount,
        token: data.id
            // insert funds_captured later
      });
      return data.id;
    })
  }).catch(function(err, charge) {
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
