const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

class App {
  constructor() {
    this.express = express();
    this.express.use(bodyParser.json());
    this.isDev = process.env.NODE_ENV !== "production";

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;