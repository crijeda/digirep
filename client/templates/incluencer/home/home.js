
if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("users");
  Meteor.subscribe("profile");
  Meteor.subscribe("datatwitter");
  Meteor.subscribe("datainstagram");

}

// Template.homeInfluencer.onCreated(function() {
//   this.subscribe('users');
// });

Template.homeInfluencer.events({

    'click .sincTwitter': function (event) {
        event.preventDefault();
        Meteor.call('sincTwitter');
    }

});



Template.homeInfluencer.helpers({

    user: function () {

        var user = Meteor.users.find().fetch();
        return user[0]
    },

    profile: function () {

        var profile = Profile.find({userId:Meteor.userId()}).fetch();
        return profile[0]
    },
    datatwitter: function () {

        var profile = Profile.find({userId:Meteor.userId()}).fetch();
        var twitteraccount = profile[0].twitteracccount;
        var datatwitter = DataTwitter.find({screenname:twitteraccount}).fetch();
        return datatwitter[0]
    },
    datainstagram: function () {

        var profile = Profile.find({userId:Meteor.userId()}).fetch();
        var instagramaccount = profile[0].instagramaccount;
        var datainstagram = DataInstagram.find({screenname:instagramaccount}).fetch();
        return datainstagram[0]
    },

});