Schema = {};

Schema.createUserFormSchema = new SimpleSchema({
    username: {
        type: String,
        optional: false,
        label: "Nombre"
    },
    //   lastname: {
    //     type: String,
    //     optional: false,
    //     label: "Apellido"
    // },
    //     rut: {
    //     type: String,
    //     optional: false,
    //     label: "Rut"
    // },
    //    address: {
    //     type: String,
    //     optional: false,
    //     label: "Dirección"
    // },
    //    bio: {
    //     type: String,
    //     optional: false,
    //     label: "Bio"
    // },

    email: {
        type: String,
        optional: false,
        label: "Email",
        regEx: SimpleSchema.RegEx.Email
    },
// emails: {
// type: [Object]

// },

// 'emails.$.address': {
//     type: String,
//     label: "Correo",
//     regEx: SimpleSchema.RegEx.Email
// },

// 'emails.$.verified': {
//     type: Boolean,
//     label: "Verificado"
// },
password: {
    type: String,
    optional: false,
    label: "Contraseña"
// create a regex here to restrict password to a format
},
passwordConfirmation: {
    type: String,
    optional: false,
    label: "Confirmar Contraseña",
// this is a custom validation to ensure the password match
custom: function () {
    if (this.value !== this.field('password').value) {
        return ("passwordMismatch");
    }
}
},
roles: {
    type: String,
    optional: false,
},
phone: {
    type: String,
    label: 'Telefono'
}
});

// Meteor.users.attachSchema(Schema.createUserFormSchema);
/*
* custom errors message for autoform
* we use it for the error 'passwordMismatch', since it is a
* custom validation and autoform have no predefined messages for it
*/

Schema.createUserFormSchema.messages({
    "passwordMismatch": "No coincide la Contraseña",
});
// you can specify [String] as the type
// Meteor.users.attachSchema(Schema.createUserFormSchema);

Meteor.users.allow({
    insert: function () { return true; },
    update: function () { return true; },
    remove: function () { return true; }
});


// Meteor.users.attachSchema(Schema.User);

TabularTables = {};

TabularTables.Users = new Tabular.Table({
    name: "Users",
    autoWidth: false,
    order: [[0, "asc"]],
    collection: Meteor.users,
    columns: [
    {data: "username", title: "Nombre Usuario"},
    { data: "roles", title: "Rol", render: function (val, type, doc) {
        var x = val;
        if(x=="Admin"){
            return  '<span class="label label-success">'+x+'</span>';
        }
        if(x=="Influencer"){
            return  '<span class="label label-primary">Influencer</span>';
        }
        if(x=="Business"){
            return  '<span class="label label-warning">Business</span>';
        }
        else{
            return  '<span class="label label-danger">No Rol</span>';

        }
    }
},
// {data: "status", title: "Rol"},
{data: "emails.[0].address", title: "Email"},
// { data: "zoneId", title: "Zona", render: function (val, type, doc) {
//         var x = Zones.findOne(val);
//         if(!x)
//              return val + " not found";
//         return x.name;
//   }
// },
{ data: "phone", title: "Telefono", render: function (val, type, doc) {
    var x = val;
    if(!x){
        return  '<span class="label label-danger">Sin Telefono</span>';
    }
    else{
        return '<a href="tel:'+ x+'">'+ x +' </a>'
    }
}
},
{ data: "createdAt", title: "Miembro desde", render: function (val, type, doc) {
    var x = val;
    return moment(x).format('DD-MM-YYYY');
}
},
{tmpl: Meteor.isClient && Template.ButtonShowUsers}
]

});
