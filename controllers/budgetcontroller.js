const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    // var userID = req.session.passport.user;
    db.Budget.findAll({
      // where: {
      //   UserUuid: userID
      // }
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  },
  findOne: function (req, res) {
    db.Budget.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  },
  create: function (req, res) {
    // var userID = req.session.passport.user;
    // console.log(req.body)
    db.Budget.create({
      Income: req.body.Income,
      Rent: req.body.Rent,
      Utilities: req.body.Utilities,
      Food: req.body.Food,
      Transportation: req.body.Transportation,
      Misc: req.body.Misc
      // UserUuid: userID
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
        id: req.body.id
      },
      returning: true
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  }
};
