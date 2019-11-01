const router = require("express").Router();
const budgetRoutes = require("./budget");
const wishlistRoutes = require("./wishlist");

// Book routes
router.use("/budget", budgetRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;