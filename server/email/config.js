Meteor.startup(function () {
  process.env.MAIL_URL = 'smtp://c.ojeda@cloudview.cl:c.ojeda.2015@blue37.dnsmisitio.net:465';
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});
