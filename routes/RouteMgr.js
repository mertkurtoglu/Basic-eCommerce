const HomeRoute = require("./HomeRoute");
const ProductsRoute = require("./ProductsRoute");
const DetailsRoute = require("./DetailsRoute");

module.exports = function (app) {
  app.use("/", HomeRoute);
  app.use("/products/category", ProductsRoute);
  app.use("/products", DetailsRoute);
};
