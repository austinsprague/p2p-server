var queries = require('../db/queries');
var stripe = require("stripe")(process.env.STRIPE);
var account_id = process.env.PLATFORM_ACCOUNT_ID;


function stripeCharge(backer) {
  return queries.Users().where({id: backer.backer_id})
  .then(function(cust){
    var token = stripeCreateToken().card.id;
    console.log('the card is', stripeCreateToken().card.id);
    console.log('token is ', token);
    return stripe.charges.create({
      amount: cust.amount,
      currency: "usd",
      description: "Charge for test@example.com",
      source: token
      })
  }).catch(function(err, charge) {
    console.log('this is the error:' + err);
    console.log('this is the charge' + charge);
  });
}

// function stripeCreateToken(){
//   stripe.tokens.create({
//     card: {
//       "number": '4242424242424242',
//       "exp_month": 12,
//       "exp_year": 2017,
//       "cvc": '123'
//     }
//   }, stripeResHandler)
// }
//
// function stripeResHandler(status, res) {
//   console.log(res);
// }

function stripeAcctRetrieve(acct_num, data) {
  stripe.accounts.retrieve(acct_num, function(err, account) {
    if (queries.UsersByAcct(acct_num)) {
      queries.Users().update(data);
    }
    else {
    queries.Users().insert({
      first_name: account.display_name,
      stripe_acct_id: account.id
      })
    }
  }).then(function(data) {
    console.log('the account is: ' ,data);
    done(null, account);
  })
}

module.exports = {
  stripeCharge,
  // stripeCustCreate,
  stripeAcctRetrieve
  // stripeTransfer
}
