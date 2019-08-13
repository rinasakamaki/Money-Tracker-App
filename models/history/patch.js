module.exports = (knex, History) => {
  return params => {
    const name = params.name;
    const update = params.update.name;

    return knex("history")
      .where({ name })
      .update({ name: update })
      .then(() => {
        return "this has been changed";
      });
  };
};
