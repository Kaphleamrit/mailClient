const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const main = async () => {

    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        auth : {
             user : '19410121179.m.amritkafle@gmail.com',
            pass : 'SOA ka bakkchodi'
        }
    });
    
    const mailOptions = {
        from : 'amritkaphle12@gmail.com',   
        to : 'shivam0gupta1@gmail.com',
        subject : 'Checking mail sender',
        text : "Did you receive this mail fucking bali.",
        html : "<h2>I'm sending you a html formatted message, send from vs Code</h2>\n "
    }
    
   transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.error(err);
        }
        else {
            console.log('Email sent successfully: ' + info.response);
        }
    });

}


main().catch(err => console.log(err));


app.listen(2020, (req, res) => {
    console.log('server listening at 2020');
})