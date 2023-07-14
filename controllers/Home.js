const axios = require("axios");
const express = require("express");
const app = express();

module.exports.getProducts = async function (req, res) {
  const mainUrl = process.env.mainUrl;
  const productsUri = mainUrl + "products";

  // Get Products
  let productsJson;
  try {
    const response = await axios.get(productsUri);
    productsJson = response.data;
  } catch (error) {
    console.error(error);
    res.render("error");
    return;
  }
  if (productsJson) {
    var bestSellers;
    var bestSellers2;
    bestSellers = productsJson.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 4);
    bestSellers2 = productsJson.sort((a, b) => b.rating.rate - a.rating.rate).slice(4, 8);
  } else {
    res.render("error");
  }

  res.render("index", {
    productsJson: productsJson,
    bestSellers: bestSellers,
    bestSellers2: bestSellers2,
  });
};
