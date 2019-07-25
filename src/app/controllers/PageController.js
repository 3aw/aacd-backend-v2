const mysql = require("mysql");
const paypal = require("paypal-rest-sdk");

module.exports = {
  async pay(req, res) {
    paypal.configure({
      mode: "sandbox",
      client_id: "ATcjnceGtqrltmuzNcuuXbiY4dtAuAXW31Lc9h2hraVdYYglTFMdHMhPkN0qrgZlKLAGbDPDV1wYfJjr",
      client_secret: "EE_aFgHqCTqfKVWtxgEY4CsQdO9yL3qaEOEK843iWU-HYv4GO1YPb9Kjoh3yUn0wDhCw1Du4LHCBaF17"
    });

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
            items: [
              {
                name: "Red sox hat",
                sku: "001",
                price: "1.00",
                currency: "BRL",
                quantity: 1
              }
            ]
          },
          amount: {
            currency: "BRL",
            total: "1.00"
          },
          description: "This is the payment description."
        }
      ]
    };

    paypal.payment.create(create_payment_json, function(error, payment) {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            // res.redirect(payment.links[i].href);
          }
        }
        console.log(payment);
      }
    });
  },
  async success(req, res) {
    const { paymentId, token, PayerID } = req.query;

    const execute_payment_json = {
      payer_id: PayerID,
      transactions: [
        {
          amount: {
            currency: "BRL",
            total: "1.00"
          }
        }
      ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
      if (error) {
        console.log("error");
      } else {
        console.log("get payment");
        console.log(JSON.stringify(payment));
        return res.send(`${paymentId} e ${PayerID}`);
      }
    });
  }
};
