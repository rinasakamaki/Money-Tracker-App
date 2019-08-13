// not sure when I will use GET request. Might have to change the where statement, depending on how I use it
module.exports = (knex, History) => {
  return params => {
    const name = params.name;

    return knex("history")
      .where({ name })
      .select()
      .then(history => {
        if (history.length) return new history(history.pop());
      });
  };
};
