var queries = require('../db/queries');
var stripe = require("stripe")(process.env.STRIPE);
var account_id = process.env.PLATFORM_ACCOUNT_ID;


function stripeCharge(backer) {
  console.log('this is the backer');
  queries.Users().where({id: backer.backer_id})
  .first().then(function(cust){
    var token = stripeCreateToken().card.id;
    console.log(token);
    console.log('the card is', stripeCreateToken().card.id);
    console.log('token is ', token);
    return stripe.charges.create({
      amount: cust.amt_pledged,
      currency: "usd",
      description: "Charge for test@example.com",
      card: {
            "number": '4242424242424242',
            "exp_month": 12,
            "exp_year": 2017,
            "cvc": '123'
          }
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
        console.log('error retrieving acct', err);
        return reject(err);
      }
      console.log('searching for user');
      queries.Users().where({stripe_acct_id: account.id}).first().then(function(user){
        if (user) {
          queries.Users().where({id: user.id}).update({
            display_name: account.display_name,
            stripe_publishable_key: data.stripe_publishable_key,
            stripe_access_token: account.stripe_access_token,
            stripe_refresh_token: account.stripe_refresh_token
          }, '*').then(function(users){
            resolve(users[0]);
          }).catch(function(err){
            reject(err);
          })
        } else {
          console.log('inserting user');
          queries.Users().insert({
            display_name: account.display_name,
            stripe_acct_id: account.id,
            stripe_publishable_key: account.stripe_publishable_key,
            stripe_access_token: account.stripe_access_token,
            stripe_refresh_token: account.stripe_refresh_token
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
  stripeAcctRetrieve
}
