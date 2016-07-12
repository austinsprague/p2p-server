
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert([{
          id: 1,
          company_name: "Delightful Cupcakery",
          user_id: 1,
          img_url: "https://pbs.twimg.com/media/Cm93mecUEAQWyI5.jpg",
          amt_req:3000,
          category:"Food",
          company_name:"Delightful Cupcakery",
          date_created:"1468281236376",
          date_exp:null,
          desc:null,
          history:"The truck has been privileged to serve patrons at well-known corporations and events like Capitol Records, Mattel, The Grammys, and E3 Expo, as well as participating in countless fundraising events for schools, churches, and non-profit organizations. My Delight is often complimented on the truck’s design and was recently dubbed “Best Looking Truck” by a popular vote organized by Fred Duran of Freddy’s Food Court.",
          idea_prob:"Not enough trucks to fill the demand",
          idea_sol:"We use fresh fruit, ice cream and offer vegan options",
          neighborhood:'Pioneer Square',
          pitch: 'We are looking to fill more bellies with cupcakes!',
          prod_feat:null,
          prod_use_cases:null,
          status:"active",
          targ_mkt:"Celebrations and events",
          uniq_comp:"We use fresh fruit, ice cream and offer vegan options",
          use_of_funds:null
        },
        {
          id: 2,
          company_name: "Wheely's Cafe",
          user_id: 3,
          img_url: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2014/04/Wheelys-Cafe.jpg',
          amt_req:2500,
          category:"Cafe",
          company_name:"Wheely's Cafe",
          date_created:"",
          date_exp:null,
          desc:null,
          history:"Since 2015, Wheelys has sold 500+ cafés  growing faster than any café chain before us. ",
          id:12,
          idea_prob:null,
          idea_sol:null,
          neighborhood:"Wallingford",
          pitch:"A Wheelys café does not cost $600,000, but $6,000. This opens the market to millions of passionate young entrepreneurs. A Wheelys is also carbon neutral, and while a traditional café is REALLY hard to move around, a Wheelys can be at the train station in the morning and at the football station in the evening.",
          prod_feat:null,
          prod_use_cases:null,
          status:"active",
          targ_mkt:"Coffee is the worlds biggest commodity with the exception of oil.  The Café market is a $300 billion market. Up until now, there has been no real global challenger to the brick and mortar café chains.   Besides this café market, Wheelys will also, like the other big café chains, offer our own branded organic coffee beans directly to consumers. This is another fast growing hundred billion dollar market.",
          uniq_comp:"Coffee for Wheelys is what books were for Amazon. In the future, our mobile sales points will sell everything",
          use_of_funds :"We need to travel to look for more suppliers"
        }, {
          amt_req:2500,
          category:"Pet Care",
          company_name:"All The Best Pet Care",
          date_created:"",
          date_exp:null,
          desc:null,
          history:"Mosses opened their first store in 1985 on Lake City Way, carrying health and specialty foods for pets.",
          id:9,
          idea_prob:null,
          idea_sol:null,
          img_url:"http://thinklocalseattle.org/businesses/all-the-best-pet-care-7/promoPhoto_preview",
          neighborhood:"Ballard",
          pitch:"All The Best Pet Care continues to be committed to providing products selected with uncompromising standards.",
          prod_feat:null,
          prod_use_cases:null,
          status:"active",
          targ_mkt:"Pet owners",
          uniq_comp:"provide the very best foods, supplements, and treats along with the most cuttin",
          use_of_funds:"We need to continue to market healthy food for pets and how important it is for their health.",
          user_id:9
        }])
      ]);
    });
};
