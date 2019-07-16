const mysql = require("mysql");

module.exports = {
  async index(req, res) {
    return res.send("Hello, World!");
  },

  async all(req, res) {
    const conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "aacd-backend-v2"
    });

    conn.query("SELECT * from buyers", (err, rows, fields) => {
      return res.json(rows);
    });
  },

  async get(req, res) {
    const conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "aacd-backend-v2"
    });

    const buyer_id = req.params.id;
    const query = "SELECT * from buyers WHERE id = ?";
    conn.query(query, [buyer_id], (err, rows, fields) => {
      return res.json(rows);
    });
  }
};
