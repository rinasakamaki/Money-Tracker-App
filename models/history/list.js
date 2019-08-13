module.exports = (knex, History) => {
  return () => {
    return knex("history")
      .select()
      .then(history => {
        return history.map(history => new History(history));
      });
  };
};
