
if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("users");
  Meteor.subscribe("profile");
  Meteor.subscribe("datatwitter");

}

// Template.homeInfluencer.onCreated(function() {
//   this.subscribe('users');
// });

Template.homeInfluencer.events({
    // 'click .logout': function(event){
    //     event.preventDefault();
    //     Meteor.logout();
    //     Router.go('login');
    // },

    // 'click .profile': function () {
    //     window.location = Router.url('users')+'/'+ Meteor.userId();
    // }

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


});