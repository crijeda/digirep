Meteor.methods({
    'sincTwitter': function(){
        var url = 'http://server.sisSoftwareFactory.com/digirepWebService/TwitterWebService.svc?wsdl';
        var profile = Profile.find({userId:Meteor.userId()}).fetch();
		var args = {screenname: profile[0].twitteracccount};

			try {
			  var client = Soap.createClient(url);
			  var result = client.rawUserSearch(args);

			  result2 = JSON.parse(result.rawUserSearchResult);

			  // console.log(result2);
			  var profileimage = result2['ProfileImageUrl'];
			  // var twid = "mqZTgQXpDdjxkrkFS";

			  // // var obj = eval ("(" + result2 + ")");
			  // // console.log(obj.ProfileStatistics[0].Name);

			  // console.log(profileimage);

			  var client = Soap.createClient(url);
			  var result = client.GetProfileStatistics(args);
			  var twid = DataTwitter.find({screenname: profile[0].twitteracccount}).fetch();

			  result2 = result.GetProfileStatisticsResult;

			  var obj = eval ("(" + result2 + ")");

			  // // console.log(result);
			  var data = obj.ProfileStatistics[0];
			  // console.log(twid[0]._id);

			  DataTwitter.update(twid[0]._id, {
		        $set: {profilestatistics:[{ screenname:data.Screenname, name:data.Name, profileimage:profileimage, profilebio:data.ProfileBio, qtytweets:data.QtyTweets, qtyfollowers:data.QtyFollowers, qtyfollowing:data.QtyFollowing, qtyfavorites:data.QtyFavorites, qtyretweets :data.QtyRetweets, images:data.Images, videos:data.Videos, music:data.Music}]}
		      });
			  // DataTwitter.insert({screenname:"Camacri", profilestatistics:[{"screenname":"Camacri","name":"BLONDIE","profileimage":"http://pbs.twimg.com/profile_images/491077197201829888/fQV2RA3o_normal.jpeg","profilebio":"Ganadora de @StartupChile  Co-Founder & CEO de @DIGIREPCL E-Commerce/Digital Expert!","qtytweets":3011,"qtyfollowers":816,"qtyfollowing":561,"qtyFfavorites":845,"qtyretweets":574,"images":141,"videos":0,"music":0}]})
			  console.log("Successful Synchronization");
			}
			catch (err) {
			  if(err.error === 'soap-creation') {
			    console.log('SOAP Client creation failed');
			  }
			  else if (err.error === 'soap-method') {
			    console.log('SOAP Method call failed');
			  }

			}
    }
});