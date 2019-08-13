module.exports = (knex, History) => {
  return params => {
    const name = params.name;
    const cost = params.cost;
    const year = params.year;
    const month = params.month;
    const day = params.day;

    return knex("history")
      .insert({ name, cost, year, month, day })
      .then(() => {
        return knex("history")
          .where({ name })
          .select();
      })
      .then(history => new History(history.pop()));
  };
};
