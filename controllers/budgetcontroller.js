const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Budget.findAll({
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  },
  findOne: function (req, res) {
    db.Budget.findOne({
      where: {
        UserId: req.params.id
      }
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  },
  create: function (req, res) {
    db.Budget.create({
      Income: req.body.Income,
      Rent: req.body.Rent,
      Utilities: req.body.Utilities,
      Food: req.body.Food,
      Transportation: req.body.Transportation,
      Misc: req.body.Misc,
      UserId: req.body.UserId
    }).then(function (newBudget) {
      res.json(newBudget)
    })
  },
  update: function (req, res) {
    db.Budget.update({
      Income: req.body.Income,
      Rent: req.body.Rent,
      Utilities: req.body.Utilities,
      Food: req.body.Food,
      Transportation: req.body.Transportation,
      Misc: req.body.Misc
    }, {
      where: {
        UserId: req.params.id
      },
      returning: true
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  }
};
