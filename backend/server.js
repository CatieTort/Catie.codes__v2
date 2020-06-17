const express = require('express');
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js')

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

dotenv.config()

const mg = mailgun({ apiKey: process.env.MAILGUN_API, domain: process.env.MAILGUN_DOMAIN });

app.post('/send-contact-form', (req, res, next) => {
    const contactData = req.body

    const data = {
        from: `${contactData.name} <noreply@catie.codes>`,
        to: 'catietortorella@gmail.com',
        subject: 'Catie.codes message',
        html: `<html><body>
        <div>From: ${contactData.name} at ${contactData.company}</div>
        <div>Contact: ${contactData.email}<br />${contactData.phone}</div>
        <div>${contactData.message}</div>
        </body></html>`,
    }
    mg.messages().send(data, function (err, body){
        if(body && body.message === 'Queued. Thank you.'){
            return res.sendStatus(200)
        }else{
            return res.sendStatus(404)
        }
    })
});

app.listen(process.env.PORT || 8080, () => {
    console.log('server running on 8080')
});

