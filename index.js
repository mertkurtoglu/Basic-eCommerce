const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressLayouts);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.static(path.join(__dirname, "css")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

require("./routes/RouteMgr")(app);

app.listen(3000);

module.exports = app;
