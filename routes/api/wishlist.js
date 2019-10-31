const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistcontroller");


router.route("/")
    .get(wishlistController.findAll)
    .post(wishlistController.create);

router.route("/:id")
    .get(wishlistController.findById)
    .put(wishlistController.update)
    .delete(wishlistController.remove);

// create api route to separate bought=false and bought=true