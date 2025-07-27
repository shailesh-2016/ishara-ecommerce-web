const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcHmHnLID8ZR4Tkkc1LDeQ7D0WUQncukXBL2wvFcKv_BmsZJ6xDYVc3KlZp-VcJmkjjUgsWiu6hR93C7",
  client_secret: "ENS2AJ43bjCRqYCHl3fwbhnhNrhZslD0-LlXjZgozQV7cXOqZfF9CisL4PB3_1SCKWnnX2lRV5Sk41lb",
});

module.exports = paypal;
