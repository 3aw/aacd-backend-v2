const mysql = require("mysql");

module.exports = {
  async index(req, res) {
    return res.send("Hello, World!");
  },

  async all(req, res) {},

  async get(req, res) {}
};
