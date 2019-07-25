const { Buyer, Subscriber, Payment } = require("../models");
const paypal = require("paypal-rest-sdk");

class SubscribeController {
  configurePaypal = async () => {
    paypal.configure({
      mode: "sandbox",
      client_id: "ATcjnceGtqrltmuzNcuuXbiY4dtAuAXW31Lc9h2hraVdYYglTFMdHMhPkN0qrgZlKLAGbDPDV1wYfJjr",
      client_secret: "EE_aFgHqCTqfKVWtxgEY4CsQdO9yL3qaEOEK843iWU-HYv4GO1YPb9Kjoh3yUn0wDhCw1Du4LHCBaF17"
    });
  };

  store = async (req, res) => {
    let { buyer, subscribers } = req.body;
    let { email, birthdate, phone, ...buyer_subscribe } = buyer;
    let payment = {
      total: 0,
      status: 0,
      batch_id: 0,
      buyer_id: 0,
      event_id: 0
    };

    let total = 0;
    //mounting subscribers
    subscribers = [...subscribers, buyer_subscribe];

    // creating buyer
    const lastBuyer = await Buyer.create(buyer);

    //adding new properties to each subscriber
    subscribers.map((subscriber, index) => {
      subscriber.buyer_id = lastBuyer.id;
      subscriber.event_id = 1;
      subscriber.value = 300;
      total += subscriber.value;
    });

    //creating subscribers
    const lastSubscribers = await Subscriber.bulkCreate(subscribers);

    //creating payment
    payment.total = total;
    payment.status = 0;
    payment.batch_id = 1;
    payment.buyer_id = lastBuyer.id;
    payment.event_id = 1;
    const lastPayment = await Payment.create(payment);

    // paypal
    this.pay(req, res, lastPayment, lastSubscribers);
  };

  pay = async (req, res, lastPayment, lastSubscribers) => {
    let response = "teste";

    this.configurePaypal();

    let items = [];
    let amount = {};

    lastSubscribers.map(subscribe => {
      items = [
        ...items,
        {
          name: `Ingresso 1º lote de ${subscribe.name}`,
          sku: "001",
          price: `${subscribe.value}`,
          currency: "BRL",
          quantity: 1
        }
      ];
    });

    amount = {
      currency: "BRL",
      total: `${lastPayment.total}`
    };

    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal"
      },
      redirect_urls: {
        return_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
      },
      transactions: [
        {
          item_list: {
            items: items
          },
          amount: amount,
          description: "Ingressos para o evento Impactar 2019 que será realizado pela AACD com início em 01/10/2019."
        }
      ]
    };

    paypal.payment.create(create_payment_json, async (error, payment) => {
      this.createPayment(req, res, lastPayment, payment, error);
    });

    return response;
  };

  createPayment = async (req, res, lastPayment, payment, error) => {
    let url = null;
    if (error) {
      return res.json({ ok: false, error: error });
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          url = payment.links[i].href;
        }
      }
      lastPayment.update({ uid: payment.id });
      return res.json({ ok: true, url: url });
    }

    console.log(payment);
  };

  success = async (req, res) => {
    const { paymentId, PayerID } = req.query;

    const payment = await Payment.findOne({ where: { uid: paymentId } });
    payment.update({ status: 1 });

    this.configurePaypal();

    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: {
            currency: "BRL",
            total: "900.00"
          }
        }
      ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
      if (error) {
        console.log(error);
        return res.json({ ok: false, error: error });
      } else {
        return res.json({ ok: true });
      }
    });
  };

  canceled = async () => {
    const { paymentId } = req.query;

    const payment = await Payment.findOne({ where: { uid: paymentId } });
    payment.update({ status: -1 });
  };
}

module.exports = new SubscribeController();
