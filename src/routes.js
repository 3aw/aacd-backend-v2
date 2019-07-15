const express = require("express");

const routes = new express.Router();

const PageController = require("./controllers/PageController");

routes.get("/", PageController.index);

module.exports = routes;
