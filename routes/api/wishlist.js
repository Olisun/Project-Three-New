const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistcontroller");

// Matches with "/api/wishlist"
router.route("/")
    .get(wishlistController.findAll)
    .post(wishlistController.create);

// Matches with "/api/wishlist/:id"
router
    .route("/:id")
    .get(wishlistController.findById)
    .put(wishlistController.update)
    .delete(wishlistController.remove);

module.exports = router;
