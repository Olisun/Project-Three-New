const router = require("express").Router();
const userController = require("../../controllers/usercontroller");

// Matches with "/api/user"
router.route("/")
    .get(userController.findAllUsers)
    .post(userController.createUser)

// Matches with "/api/user/:id"
router.route("/:id")
    .get(userController.findOneUser);

// router.route("/:id/budget")

// router.route("/:id/wishlist")


module.exports = router;