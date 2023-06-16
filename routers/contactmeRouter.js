const router = require("express").Router();
const contactmodel = require("../models/ContactmeModel");
const sendmail = require("../utili/sendmail");
router.get("/", (req, res) => {
  res.send("welcome from router folder");
});

router.post("/contactme", async (req, res) => {
  // const contactDetails = await new contactmodel({
  //   name: req.body.name,
  //   email: req.body.email,
  //   messages: req.body.messages,
  //   project: req.body.project,

  //   // name: "Amadi",
  //   // email: "amadimarcelino",
  //   // messages: "work needded",
  //   // project: "web app",
  // }).save();
  // if (contactDetails) {
  //   res.status(200).json({
  //     status: 200,
  //     message: "Data inserted succesfully",
  //     data: contactDetails,
  //   });
  // } else {
  //   res.json({
  //     message: "erro adding record",
  //   });
  // }
  // res.send("contact succesfully added")
  sendmail(req.body.name, req.body.project, req.body.messages, req.body.email);
});
module.exports = router;
