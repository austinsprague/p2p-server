var queries = require('../db/queries');


stripe.charges.create({
  amount: 400,
  currency: "usd",
  source: req.body.token,
  description: "Charge for test@example.com"
}, {
  idempotency_key: "axJl84KiKqBHMxM7"
}, function(err, charge) {
  // asynchronously called
});



module.exports = {
  stripeCharge
}
