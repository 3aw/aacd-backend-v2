const express = require("express");

const routes = new express.Router();

const BuyersController = require("./app/controllers/BuyersController");

routes.get("/buyers/all", BuyersController.create);
routes.post("/new", BuyersController.store);

module.exports = routes;
