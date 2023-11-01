const router = require("express").Router();
const contactmodel = require("../models/ContactmeModel");
const feedBackmail = require("../utili/feedBackmail");
const contactMemail = require("../utili/contactMemail");
router.get("/", (req, res) => {
  res.send("welcome from router folder");
});

router.post("/contactme", async (req, res) => {
  // var params={
  //   fu
  // }
  const contactDetails = await new contactmodel({
    fullName: req.body.fullName,
    email: req.body.email,
    message: req.body.message,
    subject: req.body.subject,
  }).save();
  if (contactDetails) {
    const isEmailSent = contactMemail(
      req.body.fullName,
      req.body.subject,
      req.body.messages,
      req.body.email
    );
    const isFeedBackmail = feedBackmail(req.body.fullName, req.body.email);
    res.status(200).json({
      status: 200,
      message: "Data inserted succesfully",
      data: contactDetails,
    });
  } else {
    res.json({
      message: "erro adding record",
    });
  }
  res.send("contact succesfully added");
});

router.post("/hireMe", async (req, res) => {
  const contactDetails = await new contactmodel({
    name: req.body.name,
    email: req.body.email,
    messages: req.body.messages,
    project: req.body.project,

    // name: "Amadi",
    // email: "amadimarcelino",
    // messages: "work needded",
    // project: "web app",
  }).save();
  if (contactDetails) {
    const isEmailSent = sendmail(
      req.body.name,
      req.body.project,
      req.body.messages,
      req.body.email
    );
    res.status(200).json({
      status: 200,
      message: "Data inserted succesfully",
      data: contactDetails,
    });
  } else {
    res.json({
      message: "erro adding record",
    });
  }
  res.send("contact succesfully added");
});
module.exports = router;
