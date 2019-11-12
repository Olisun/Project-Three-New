const db = require("../models");

module.exports = {
  findAllWishlist: function (req, res) {
    db.Wishlist.findAll({
      where: {
        UserId: req.params.id
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
      price: req.body.price,
      bought: false,
      UserId: req.body.UserId
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
    db.Wishlist.update(
      {bought : true},
      {
      where: {
        id: req.params.id
      }
    }).then(function (dbWishlist) {
      res.json(dbWishlist);
    });
  }
};
