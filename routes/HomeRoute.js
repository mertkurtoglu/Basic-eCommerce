const express = require("express");
const router = express.Router();
const homeCtrl = require("../controllers/Home");

router.get("/", homeCtrl.getProducts);

module.exports = router;
