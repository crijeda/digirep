Profile = new Mongo.Collection("profile");

Profile.attachSchema(new SimpleSchema({

    userId: {
        type: String,
        optional: true,
    },
    firstname: {
        type: String,
        optional: true,
        label: "Nombre"
    },
    lastname: {
        type: String,
        optional: true,
        label: "Apellido"
    },
    rut: {
        type: String,
        optional: true,
        label: "Rut"
    },
    phone: {
        type: String,
        optional: true,
        label: "Telefono"
    },
    address: {
        type: String,
        optional: true,
        label: "Direccion"
    },
    bio: {
        type: String,
        optional: true,
        label: "Bio"
    },
     twitteracccount: {
        type: String,
        optional: true,
        label: "Cuenta en Twitter Sin @"
    },
     instagramaccount: {
        type: String,
        optional: true,
        label: "Cuenta en Instagram Sin @"
    },


}));