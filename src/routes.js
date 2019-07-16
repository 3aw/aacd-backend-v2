const express = require("express");

const routes = new express.Router();

// const PageController = require("./app/controllers/PageController");
const BuyersController = require("./app/controllers/BuyersController");

// routes.get("/", (req, res) => res.render("auth/signup"));
routes.get("/buyers/all", BuyersController.all);
// routes.get("/get/:id", PageController.get);

module.exports = routes;
