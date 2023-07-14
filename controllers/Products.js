const axios = require("axios");
const express = require("express");
const app = express();

module.exports.getAllProducts = async function (req, res) {
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
    let category = req.params.category;
    var productsArr = [];

    //Filter products by category
    switch (category) {
      case "men":
        productsArr = productsJson.filter((item) => item.category.startsWith("men"));
        break;
      case "women":
        productsArr = productsJson.filter((item) => item.category.startsWith("women"));
        break;
      case "jewelery":
        productsArr = productsJson.filter((item) => item.category.startsWith("jewelery"));
        break;
      case "electronics":
        productsArr = productsJson.filter((item) => item.category.startsWith("electronics"));
        break;
      default:
        break;
    }
  } else {
    res.render("error");
  }

  res.render("products", { productsArr: productsArr, category: category });
};
