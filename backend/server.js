const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

app.post('/send-contact-form', function (req, res, next) {
   
});

app.listen(process.env.PORT || 8080, () => {
    console.log('server running on 8080')
});