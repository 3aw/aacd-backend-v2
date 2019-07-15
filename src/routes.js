const express = require("express");

const routes = new express.Router();

const PageController = require("./controllers/PageController");

routes.get("/", function(req, res) {
  res.send("Hello World!");
});
module.exports = routes;
