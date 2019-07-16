const express = require("express");

const routes = new express.Router();

// const PageController = require("./app/controllers/PageController");

routes.get("/", (req, res) => {
  return res.send("Hello, dude!");
});
// routes.get("/all", PageController.all);
// routes.get("/get/:id", PageController.get);

module.exports = routes;
