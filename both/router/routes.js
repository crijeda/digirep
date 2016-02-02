// Router.route('/', {
//   name: 'home',
//   layoutTemplate: 'publicLayout'
// });

// Router.route('/dashboard', {
//   name: 'dashboard'
// });

Router.route('/', {
  name: 'home'
});

Router.route('/influencer/preferences', {
  name: 'influencer/preferences',
  layoutTemplate: 'appLayout'
});

Router.route('/influencer/profile', {
  name: 'influencer/profile',
  layoutTemplate: 'appLayout'
});

Router.route('/influencer/facturation', {
  name: 'influencer/facturation',
  layoutTemplate: 'appLayout'
});

Router.route('/influencer/offers', {
  name: 'influencer/offers',
  layoutTemplate: 'appLayout'
});

Router.route('/influencer/campaigns', {
  name: 'influencer/campaigns',
  layoutTemplate: 'appLayout'
});


Router.route('/influencer/campaigns-record', {
  name: 'influencer/campaignsRecord',
  layoutTemplate: 'appLayout'
});


Router.route('/influencer/visits', {
  name: 'influencer/visits',
  layoutTemplate: 'appLayout'
});

Router.route('/influencer/help', {
  name: 'influencer/help',
  layoutTemplate: 'appLayout'
});

Router.route('/users', {
  name: 'users'
});

Router.plugin('ensureSignedIn', {
  only: ['home']
});
