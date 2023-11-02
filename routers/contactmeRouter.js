const router = require("express").Router();
const contactmodel = require("../models/ContactmeModel");
const hireMemodel = require("../models/hireMe");
const feedBackmail = require("../utili/feedBackmail");
const contactMemail = require("../utili/contactMemail");
const hireMe = require("../utili/hireMeMail");
router.get("/", (req, res) => {
  res.send("welcome from router folder");
});

router.post("/contactme", async (req, res) => {
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
      req.body.message,
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
});

router.post("/hireMe", async (req, res) => {
  const hireMeDetails = await new hireMemodel({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    project: req.body.project,
  }).save();
  if (hireMeDetails) {
    const isEmailSent = hireMe(
      req.body.name,
      req.body.project,
      req.body.description,
      req.body.email
    );
    res.status(200).json({
      status: 200,
      message: "Data inserted succesfully",
      data: hireMeDetails,
    });
    const isFeedBackmail = feedBackmail(req.body.name, req.body.email);
  } else {
    res.json({
      message: "erro adding record",
    });
  }
});
module.exports = router;
