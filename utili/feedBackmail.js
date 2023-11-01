var nodemailer = require("nodemailer");
const feedBackmail = (name, email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amadifaraday@gmail.com",
      pass: "foympeqrkqmkukac",
    },
  });

  var mailOptions = {
    from: "amadifaraday@gmail.com",
    to: `${email}`,
    subject: "RE:Amadi Patrick",
    // text: "you have a new request for backend task ",
    html:
      "<h4>welcome </h4>" +
      `<p> Dear   ${name}  Thanks for your reaching out to us we will get in touch with you shortly</p>` +
      `<p>Best Regards:</p>` +
      `<p>Amadi Patrick </p>` +
      `<p>+2349060834999</p>`,
  };

  const sendMail = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = feedBackmail;
