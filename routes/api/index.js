const router = require("express").Router();
const wishlistRoutes = require("./wishlist");
const budgetRoutes = require("./budget");
const userRoutes = require("./user");

router.use("/wishlist", wishlistRoutes);
router.use("/budget", budgetRoutes);
router.use("/user", userRoutes);

module.exports = router;