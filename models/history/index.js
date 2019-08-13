const History = function(dbHistory) {
  this.name = dbHistory.name;
  this.cost = dbHistory.cost;
  this.year = dbHistory.year;
  this.month = dbHistory.month;
  this.day = dbHistory.day;
};

module.exports = knex => {
  return {
    list: require("./list")(knex, History),
    create: require("./create")(knex, History),
    patch: require("./patch")(knex, History),
    delete: require("./delete")(knex, History)
  };
};
