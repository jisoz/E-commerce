var nodemailer = require('nodemailer');

const sendEmail=(res,email,id,token,OTP)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },tls: {
            rejectUnauthorized: false
          }
      });
      
      var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Password Recovery',
        html: `
             
         
        
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title></title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: #333;
      background-color: #fff;
    }

    .container {
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      padding: 0 0px;
      padding-bottom: 10px;
      border-radius: 5px;
      line-height: 1.8;
    }

    .header {
      border-bottom: 1px solid #eee;
    }

    .header a {
      font-size: 1.4em;
      color: #000;
      text-decoration: none;
      font-weight: 600;
    }

    .content {
      min-width: 700px;
      overflow: auto;
      line-height: 2;
    }

    .otp {
      background: linear-gradient(to right, #00bc69 0, #00bc88 50%, #00bca8 100%);
      margin: 0 auto;
      width: max-content;
      padding: 0 10px;
      color: #fff;
      border-radius: 4px;
    }

    .footer {
      color: #aaa;
      font-size: 0.8em;
      line-height: 1;
      font-weight: 300;
    }

    .email-info {
      color: #666666;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      padding-bottom: 6px;
    }

    .email-info a {
      text-decoration: none;
      color: #00bc69;
    }
  </style>
</head>

<body>
  <!--Subject: Login Verification Required for Your [App Name] Account-->
  <div class="container">
    <div class="header">
      <a>Prove Your [App Name] Identity</a>
    </div>
    <br />
    <strong>Dear [Recipient Name],</strong>
    <p>
      We have received a login request for your Next E-commerce account. For
      security purposes, please verify your identity by providing the
      following One-Time Password (OTP).
      <br />
      <b>Your One-Time Password (OTP) verification code is:</b>
    </p>
    <h2 class="otp">${OTP}</h2>
    <p style="font-size: 0.9em">
      <strong>One-Time Password (OTP) is valid for 3 minutes.</strong>
      <br />
      <br />
      If you did not initiate this login request, please disregard this
      message. Please ensure the confidentiality of your OTP and do not share
      it with anyone.<br />
      <strong>Do not forward or give this code to anyone.</strong>
      <br />
      <br />
      <strong>Thank you for choosing us.</strong>
      <br />
      <br />
      Best regards,
      <br />
      <strong>Next</strong>
    </p>

    <hr style="border: none; border-top: 0.5px solid #131111" />
    <div class="footer">
      <p>This email can't receive replies.</p>
      <p>
        For more information about Next and your account, visit
        <strong>Next</strong>
      </p>
    </div>
  </div>
  <div style="text-align: center">
    <div class="email-info">
      <span>
        This email was sent to
        <a href="mailto:${email}">${email}</a>
      </span>
    </div>
    <div class="email-info">
      <a href="/">Next</a> | [Lebanon]
      | [Beirut] - [00000], [Al Hamra Street]
    </div>
    <div class="email-info">
      &copy; 2024 Next. All rights
      reserved.
    </div>
  </div>
</body>
<!--    This template is made Redwan one from Ocoxe. -->
<!-- https://www.ocoxe.com -->
</html>
        `
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          return res.json({status: 'success'});
        }
      });
}

module.exports = sendEmail;