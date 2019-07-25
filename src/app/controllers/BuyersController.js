const { Buyer, Subscriber, Payment } = require("../models");

class BuyersController {
  create(req, res) {
    return res.json({ ok: true });
  }

  async store(req, res) {
    console.log(req.body);
    let { buyer, subscribers, payment } = req.body;
    let { email, birthdate, phone, ...buyer_subscribe } = buyer;
    //mounting subscribers
    subscribers = [...subscribers, buyer_subscribe];

    // creating buyer and payment
    // const lastBuyer = await Buyer.create(buyer);
    // const lastPayment = await Payment.create(payment);

    //adding new properties to each subscriber
    subscribers.map((subscriber, index) => {
      subscriber.payment_id = 1;
      subscriber.buyer_id = 1;
    });

    // buyer.buyer_id = lastBuyer.id;
    // buyer.event_id = 1;
    // buyer.payment_id = 1;

    // console.log(lastBuyer.id);
    // const lastSubscribers = await Subscriber.bulkCreate(subscribers);

    return res.json({ ok: true, buyer: buyer, subscribers: subscribers });
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
