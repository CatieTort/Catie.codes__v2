var DOMAIN = 'sandbox470a48c181bd4a448f3aca16fe96baca.mailgun.org';
var api_key = process.env.MAILGUN_API;
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'catietortorella@gmail.com',
    subject: 'Catie.codes contact form',
    text: 'Testing form',
    html: "<html>HTML version of the body</html>",
};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});