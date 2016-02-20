var url = 'http://server.sisSoftwareFactory.com/digirepWebService/TwitterWebService.svc?wsdl';
var args = {screenname: 'Camacri'};


// try {
//   var client = Soap.createClient(url);
//   var result = client.rawFollowers(args);

//   result2 = JSON.parse(result.rawFollowersResult);

//   console.log(result);
//   console.log(result2);
//   console.log(result2.length);
//   console.log(result2[2]);
// }
// catch (err) {
//   if(err.error === 'soap-creation') {
//     console.log('SOAP Client creation failed');
//   }
//   else if (err.error === 'soap-method') {
//     console.log('SOAP Method call failed');
//   }

// }


// try {
//   var client = Soap.createClient(url);
//   var result = client.GetProfileStatistics(args);

//   result2 = result.GetProfileStatisticsResult;

//   var obj = eval ("(" + result2 + ")");

//   console.log(result);
//   console.log(obj.ProfileStatistics[0].Name);

// }
// catch (err) {
//   if(err.error === 'soap-creation') {
//     console.log('SOAP Client creation failed');
//   }
//   else if (err.error === 'soap-method') {
//     console.log('SOAP Method call failed');
//   }

// }