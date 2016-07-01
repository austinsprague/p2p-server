var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', function (req, res) {
  queries.Projects().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.post('/', function(req, res){
  queries.Projects().insert({
    company_name: 'Betty\'s Bakeshop',
    user_id: 1,
    img_url: 'http://del.h-cdn.co/assets/15/44/black-forest-cupcakes4-edit4srgb.jpg',
    desc: 'Making delious cupcakes all the time!',
    pitch:'Need more trucks to fill the bellies of people wherever they are!',
    product_features:'Inside the custom-built My Delight Truck, one will find an impressive gourmet kitchen on wheels. Stainless steel from floor to ceiling, this kitchen features the expected refrigerator, freezer, and sink, but also custom-built stainless steel racks that can securely hold thousands of cupcakes for travel.' ,
    target_market: 'The truck has been privileged to serve patrons at well-known corporations and events like Capitol Records, Mattel, The Grammys, and E3 Expo, as well as participating in countless fundraising events for schools, churches, and non-profit organizations. ',
    unique_comp:'My Delight is often complimented on the truck’s design and was recently dubbed “Best Looking Truck” by a popular vote organized by Fred Duran of Freddy’s Food Court. What fans love best about the truck, however, isn’t on the outside; it’s the award-winning cupcakes that keep people lining up.' ,
    history: 'After establishing a name for themselves in their brick & mortar location in Ontario, My Delight Cupcakery launched a gourmet food truck in September of 2011. Since its debut, the truck has frequented numerous cities in the Los Angeles County, Orange County, as well as in their home-base of San Bernardino County.',
    use_of_funds: 'Need more trucks to fill the bellies of people wherever they are!',
    date_created: 'May 25 2016',
    date_expires: '45 days',
    status: 'active'
  }).then(function(){
    res.json('success');
  }).catch(function(err){
    res.json(err);
  })
});

router.get('/:id', function (req, res) {
  queries.Projects().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.get('/:id/update', function (req, res) {
  queries.Projects().where({ id: req.params.id }).first().then(function(data){
    res.json(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.put('/:id/update', function (req, res) {
  queries.Projects().where({ id: req.params.id }).update({
    company_name: 'Betty\'s Bakeshop',
    user_id: 2,
    img_url: 'http://del.h-cdn.co/assets/15/44/black-forest-cupcakes4-edit4srgb.jpg',
    desc: 'Making delious cupcakes all the time!',
    pitch:'Need more trucks to fill the bellies of people wherever they are!',
    product_features:'Inside the custom-built My Delight Truck, one will find an impressive gourmet kitchen on wheels. Stainless steel from floor to ceiling, this kitchen features the expected refrigerator, freezer, and sink, but also custom-built stainless steel racks that can securely hold thousands of cupcakes for travel.' ,
    target_market: 'The truck has been privileged to serve patrons at well-known corporations and events like Capitol Records, Mattel, The Grammys, and E3 Expo, as well as participating in countless fundraising events for schools, churches, and non-profit organizations. ',
    unique_comp:'My Delight is often complimented on the truck’s design and was recently dubbed “Best Looking Truck” by a popular vote organized by Fred Duran of Freddy’s Food Court. What fans love best about the truck, however, isn’t on the outside; it’s the award-winning cupcakes that keep people lining up.' ,
    history: 'After establishing a name for themselves in their brick & mortar location in Ontario, My Delight Cupcakery launched a gourmet food truck in September of 2011. Since its debut, the truck has frequented numerous cities in the Los Angeles County, Orange County, as well as in their home-base of San Bernardino County.',
    use_of_funds: 'Need more trucks to fill the bellies of people wherever they are!',
    date_created: 'May 25 2016',
    date_expires: '45 days',
    status: 'active'
  }).then(function(data){
    res.json('successful update');
    res.redirect(data);
  }).catch(function(err){
    res.json(err);
  });
});

router.delete('/:id/delete', function(req, res) {
  queries.Projects().where({ id: req.params.id }).del().then(function(){
    res.json('successful delete');
  }).catch(function(err){
    res.json(err);
  });
});

module.exports = router;
