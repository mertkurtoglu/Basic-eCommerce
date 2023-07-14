const express = require("express");
const router = express.Router();
const detailsCtrl = require("../controllers/Details");

router.get("/:id", detailsCtrl.getProduct);

module.exports = router;
