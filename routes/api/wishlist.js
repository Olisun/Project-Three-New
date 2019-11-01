const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistcontroller");

<<<<<<< HEAD

=======
// Matches with "/api/wishlist"
>>>>>>> 7343ea10226c570444192077cfbc03903b4bb12b
router.route("/")
    .get(wishlistController.findAll)
    .post(wishlistController.create);

<<<<<<< HEAD
router.route("/:id")
=======
// Matches with "/api/wishlist/:id"
router
    .route("/:id")
>>>>>>> 7343ea10226c570444192077cfbc03903b4bb12b
    .get(wishlistController.findById)
    .put(wishlistController.update)
    .delete(wishlistController.remove);

<<<<<<< HEAD
// create api route to separate bought=false and bought=true
=======
module.exports = router;
>>>>>>> 7343ea10226c570444192077cfbc03903b4bb12b
