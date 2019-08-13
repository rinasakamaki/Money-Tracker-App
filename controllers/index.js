const express = require("express");
const router = express.Router();
const historyRouter = require("./history");

module.exports = models => {
  router.use("/history", historyRouter(models));
  return router;
};
