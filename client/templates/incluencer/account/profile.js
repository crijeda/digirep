if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("users");

}

Template.influencerProfile.helpers({


    schema: function () {
        return Schema.createUserFormSchema;
    },
    RolesOptions: function () {
        return {
            "Admin": "Admin",
            "Influencer": "Influenciador",
            "Business": "Empresa"
        }
    },
    user: function () {

        var user = Meteor.users.find().fetch();
        return user[0]
    },
     schema: function () {

        var schema = Schema.createUserFormSchema
        return schema
    },
     userid: function () {

        var user = Meteor.users.find().fetch();
        return user[0]._id
    },


});

Meteor.users.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});