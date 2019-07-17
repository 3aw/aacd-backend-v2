const { Buyers } = require("../models");

class BuyersController {
  create(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    await User.create(req.body);

    return res.json({ ok: true });
  }
}

module.exports = new BuyersController();
