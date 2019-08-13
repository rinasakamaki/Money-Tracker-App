module.exports = (knex, History) => {
  return params => {
    const name = params.name;

    return knex("history")
      .where({ name })
      .del()
      .then(history => {
        if (history === 1) return "It is deleted";
      });
  };
};
