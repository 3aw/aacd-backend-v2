const express = require("express");

const routes = new express.Router();

const BuyersController = require("./app/controllers/BuyersController");

routes.get("/buyers/get", BuyersController.getAll);
routes.get("/buyers/get/:id", BuyersController.get);
routes.get("/buyers/update/:id", BuyersController.update);
routes.get("/buyers/delete/:id", BuyersController.delete);

routes.post("/new", BuyersController.store);

module.exports = routes;
