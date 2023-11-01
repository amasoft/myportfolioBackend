var nodemailer = require("nodemailer");
const contactMemail = (name, subject, messages, email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amadifaraday@gmail.com",
      pass: "foympeqrkqmkukac",
    },
  });

  var mailOptions = {
    from: "amadifaraday@gmail.com",
    to: "amadiarinzechukwu@gmail.com",
    subject: `${subject}`,
    // text: "you have a new request for backend task ",
    html:
      "<h4>welcome </h4>" +
      `<p> Dear Patrick  ${name}  request your backend service</p>` +
      `<p>below is the details :</p>` +
      `<p>${messages}</p>` +
      `<p>Contact email :${email}</p>`,
  };

  const sendMail = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = contactMemail;
