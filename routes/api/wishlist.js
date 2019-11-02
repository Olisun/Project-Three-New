const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistcontroller");


// Matches with "/api/wishlist"
router.route("/")
    .get(wishlistController.findAllWishlist)
    .get(wishlistController.finadAllBought)
    .post(wishlistController.create);

router.route("/:id")
// Matches with "/api/wishlist/:id"
router
    .route("/:id")
    .delete(wishlistController.remove);


module.exports = router;
