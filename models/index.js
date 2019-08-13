module.exports = function(knex) {
  return {
    history: require("./history")(knex)
  };
};
