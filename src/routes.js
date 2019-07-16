const express = require("express");

const routes = new express.Router();

const PageController = require("./app/controllers/PageController");

routes.get("/", PageController.index);
routes.get("/all", PageController.all);
routes.get("/get/:id", PageController.get);

module.exports = routes;
