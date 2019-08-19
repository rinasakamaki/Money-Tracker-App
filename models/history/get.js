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
