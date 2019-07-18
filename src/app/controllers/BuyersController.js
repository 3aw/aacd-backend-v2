const { Buyer } = require("../models");

class BuyersController {
  create(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    console.log(req.body);
    //const buyer = await Buyer.create(req.body);

    // return res.json({ ok: true, buyer: buyer });
    return res.json({ ok: true, data: req.body });
  }

  async getAll(req, res) {
    const buyers = await Buyer.findAll({});
    return res.json(buyers);
  }

  async get(req, res) {
    const { id } = req.params;
    // const buyers = await Buyer.findAll({ where: { id: id } });
    const buyer = await Buyer.findByPk(id);
    return res.json(buyer);
  }

  async update(req, res) {
    const { id } = req.params;
    const buyer = await Buyer.findByPk(id);
    buyer.update({ name: "Vinicius" });
    return res.json({ ok: true });
  }

  async delete(req, res) {
    const { id } = req.params;
    const buyer = await Buyer.findByPk(id);
    buyer.destroy();
    return res.json({ ok: true });
  }
}

module.exports = new BuyersController();
