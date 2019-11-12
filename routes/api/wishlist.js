const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistcontroller");


// Matches with "/api/wishlist"
router.route("/")
    .get(wishlistController.findAllWishlist)
    .post(wishlistController.create);


// Matches with "/api/wishlist/:id"
router.route("/:id")
    .get(wishlistController.findAllWishlist)
    .delete(wishlistController.remove)
    .put(wishlistController.update);


module.exports = router;
