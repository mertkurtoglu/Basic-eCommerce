const axios = require("axios");
const express = require("express");
const app = express();

module.exports.getProduct = async function (req, res) {
  let id = req.params.id;
  const mainUrl = process.env.mainUrl;
  const productUri = mainUrl + "products/" + id;

  console.log("response.data:", productUri);
  // Get Single Product
  var productsJson;
  try {
    const response = await axios.get(productUri);
    productsJson = response.data;
  } catch (error) {
    console.error(error);
    res.render("error");
    return;
  }

  if (productsJson) {
    //Add rating stars
    var stars = Math.round(productsJson.rating.rate);
    productsJson.rating.star = stars;

    res.render("details", { productsJson: productsJson });
  } else {
    res.render("error");
  }
};
