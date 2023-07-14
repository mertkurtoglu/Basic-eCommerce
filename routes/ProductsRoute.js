const express = require("express");
const router = express.Router();
const productCtrl = require("../controllers/Products");

router.get("/:category", productCtrl.getAllProducts);

module.exports = router;
