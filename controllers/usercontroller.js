const db = require("../models");

module.exports = {
    findAllUsers: function (req, res) {
        db.User.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    },
    findOneUser: function (req, res) {
        db.User.findOne({
            where: {
                username: req.params.username,
                password: req.params.password
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    },
    createUser: function (req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password,
        }).then(function (newUser) {
            res.json(newUser);
        });
    }
};
