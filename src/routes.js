const express = require("express");

const routes = new express.Router();

const PageController = require("./controllers/PageController");

routes.get("/", PageController.index);
routes.get("/all", PageController.all);
routes.get("/get/:id", PageController.get);

module.exports = routes;
