const nodemailer = require('nodemailer');
const emailInfo = require('../email-info.js');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailInfo.email,
    pass: emailInfo.password
  }
});

const controller = {
  sendEmail: (req, res) => {
    const mailOptions = {
      from: emailInfo.email,
      to: 'kevindavidpozzi@gmail.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    res.send('in get');
  }
}

module.exports = controller