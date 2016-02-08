// Router.route('/', {
//   name: 'home',
//   layoutTemplate: 'publicLayout'
// });

// Router.route('/dashboard', {
//   name: 'dashboard'
// });
Router.onBeforeAction(function () {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        Router.go('login');
    } else {
        // required by Iron to process the route handler
        this.next();
    }
}, {
    except: ['login','loginf']
}); 

Router.route('/', {
  name: 'home'
});

//INFLUENCER
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

//BUSINESS
Router.route('/business/brands', {
  name: 'business/brands',
  layoutTemplate: 'appLayout'
});

Router.route('/business/facturation', {
  name: 'business/facturation',
  layoutTemplate: 'appLayout'
});

Router.route('/business/services', {
  name: 'business/services',
  layoutTemplate: 'appLayout'
});

Router.route('/business/recommended', {
  name: 'business/recommended',
  layoutTemplate: 'appLayout'
});

Router.route('/business/new-campaign', {
  name: 'business/newCampaign',
  layoutTemplate: 'appLayout'
});

Router.route('/business/campaigns', {
  name: 'business/campaigns',
  layoutTemplate: 'appLayout'
});

Router.route('/business/campaigns-record', {
  name: 'business/campaignsRecord',
  layoutTemplate: 'appLayout'
});

Router.route('/business/help', {
  name: 'business/help',
  layoutTemplate: 'appLayout'
});

//ADMIN
Router.route('/admin/accounts', {
  name: 'users'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/loginf', {
  name: 'loginf'
});

// Router.plugin('ensureSignedIn', {
//   only: ['home']
// });
