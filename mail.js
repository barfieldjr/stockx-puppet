const pageScraper = require('./pageScraper');

var nodemailer = require('nodemailer');


async function mail(price) {
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'My Email',
        pass: 'My Password'
    }
    });

    var mailOptions = {
    from: 'StockX Puppet',
    to: 'Recepient Email',
    subject: 'Node.js Stock Notification',
    text: `The price on stockX of your requested item is currently $${price}!`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}

module.exports = {
    mail
}

mail();