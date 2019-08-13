const historyData = require("../data/history");

exports.seed = function(knex, Promise) {
  return knex("history")
    .del()
    .then(() => {
      return knex("history").insert(historyData);
    });
};
