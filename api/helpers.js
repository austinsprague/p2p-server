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

function stripeAcctRetrieve(data) {
  console.log('data', data);
  return new Promise(function(resolve, reject){
    var stripe = require("stripe")(process.env.STRIPE);
    stripe.accounts.retrieve(data.stripe_user_id, function(err, account) {
      if (err) {
        return reject(err);
      }
      queries.Users().where({stripe_acct_id: account.id}).then(function(user){
        if (user) {
          queries.Users().update({
            display_name: account.display_name,
            stripe_acct_id: account.id,
            stripe_publishable_key: data.stripe_publishable_key
          }, '*').then(function(users){
            resolve(users[0]);
          }).catch(function(err){
            reject(err);
          })
        } else {
          queries.Users().insert({
            first_name: account.display_name,
            stripe_acct_id: account.id,
            stripe_publishable_key: account.stripe_publishable_key
          }, '*').then(function(users) {
            resolve(users[0]);
          }).catch(function(err){
            reject(err);
          })
        }
      })
    })
  })
}

module.exports = {
  stripeCharge,
  // stripeCustCreate,
  stripeAcctRetrieve
  // stripeTransfer
}
