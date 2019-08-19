const express = require("express");

module.exports = models => {
  const createHistory = (req, res) => {
    models.history
      .create({
        name: req.body.name,
        cost: req.body.cost,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day
      })
      .then(history => {
        const result = res.status(200).json(history);
        return result;
      });
  };
  const listHistory = (req, res) => {
    models.history.list().then(history => res.status(200).json(history));
  };
  const patchHistory = (req, res) => {
    return models.history
      .patch({ name: req.params.name, update: req.body })
      .then(history => res.status(200).json(history));
  };
  const deleteHistory = (req, res) => {
    return models.history
      .delete({ name: req.params.name })
      .then(history => res.status(200).json(history));
  };
  const router = express.Router();
  router.get("/", listHistory);
  router.post("/", createHistory);
  router.patch("/:name", patchHistory);
  router.delete("/:name", deleteHistory);

  return router;
};
