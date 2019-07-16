const mysql = require("mysql");

module.exports = {
  async all(req, res) {
    return res.send("Hello, World!");
  },

  async get(req, res) {}
};
