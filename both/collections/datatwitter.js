DataTwitter = new Mongo.Collection("DataTwitter");

ProfileStatisticsSchema = new SimpleSchema({
  // createdAt: {
  //   type: Date,
  //   autoValue: function() {
  //     return moment().toDate();
  //   }
  // },
  screenname: {
    type: String,
  },
  name: {
    type: String,
  },
  profileimage: {
    type: String,
  },
  profilebio: {
    type: String,
  },
  qtytweets: {
    type: Number,
  },
  qtyfollowers: {
    type: Number,
  },
  qtyfollowing: {
    type: Number,
  },
  qtyfavorites: {
    type: Number,
  },
  qtyretweets: {
    type: Number,
  },
  images: {
    type: Number,
  },
  videos: {
    type: Number,
  },
  music: {
    type: Number,
  },


});

DataTwitter.attachSchema(new SimpleSchema({
  screenname: {
    type: String,
    optional: true,
    label: "TwitterScreenname",
    max: 200
  },
   profilestatistics: {
    optional: true,
    type: [ProfileStatisticsSchema],
    label: 'ProfileStatistics'
    },

}));