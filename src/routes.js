const express = require("express");

const routes = new express.Router();

const BuyersController = require("./app/controllers/BuyersController");
const PageController = require("./app/controllers/PageController");

routes.get("/buyers/get", BuyersController.getAll);
routes.get("/buyers/get/:id", BuyersController.get);
routes.get("/buyers/update/:id", BuyersController.update);
routes.get("/buyers/delete/:id", BuyersController.delete);

routes.post("/new", BuyersController.store);

routes.get("/pay", PageController.pay);
routes.get("/success", PageController.success);

module.exports = routes;
