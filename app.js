const express = require("express");
const app = express();
const mongoose = require("mongoose");
const contactMe = require("./models/ContactmeModel");
const router = require("./routers/contactmeRouter");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT = 5000;
app.use("/api/v1/portfolio", router);
//middlewares
app.use("/", (req, res) => {
  console.log("welcome to amapat Api");
});
// app.use(express.json())
const CONNECTIONURL =
  "mongodb+srv://patrick:kgEuOVhqzeaD91Tt@cluster0.bjerbjj.mongodb.net/portfolio";
mongoose
  .connect(CONNECTIONURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex:true
  })
  .then((result) => {
    console.log("Database connection successfull");
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

app.use(router);
