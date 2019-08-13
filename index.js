const config = require("./config");
const services = require("./services")(config);
const knex = require("knex")(config.db);
const models = require("./models")(knex);
const apiRouter = require("./controllers")(models);
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.json({ type: "application.json", limit: "50mb" }));
app.use("/api", apiRouter);
app.use(express.static(`${__dirname}/public`));
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.listen(config.express.port, () => {
  services.logger.log(`Server up and listening on port ${config.express.port}`);
});
