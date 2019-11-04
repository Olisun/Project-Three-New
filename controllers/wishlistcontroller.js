const db = require("../models");

module.exports = {
  findAllWishlist: function (req, res) {
    db.Wishlist.findAll({
      where: {
        bought: false
        // UserUuid: userID
      }
    }).then(function (dbWishlist) {
      res.json(dbWishlist);
    });
  },
  findAllBought: function (req, res) {
    db.Wishlist.findAll({
      where: {
        bought: true
        // UserUuid: userID
      }
    }).then(function (dbWishlist) {
      res.json(dbWishlist);
    });
  },
  create: function (req, res) {
    console.log(req);
    console.log("creating wishlist item")
    db.Wishlist.create({
      name: req.body.name,
      image: req.body.image,
      price: req.body.price
    }).then(function (newWishlist) {
      console.log(newWishlist)
      res.json(newWishlist);
    })
  },
  remove: function (req, res) {
    db.Wishlist.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbWishlist) {
      res.json(dbWishlist);
    });
  },
  update: function (req, res) {
    db.Wishlist.update({
      where: {
        id: req.params.id
      }
    }).then(function (dbWishlist) {
      res.json(dbWishlist);
    });
  }
};
