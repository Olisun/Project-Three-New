const router = require("express").Router();
const budgetController = require("../../controllers/budgetcontroller");

// Matches with "/api/budget"
router.route("/")
    .get(budgetController.findAll)
    .post(budgetController.create);

// Matches with "/api/budget/:id"
router.route("/:id")
    .get(budgetController.findOne)
    .put(budgetController.update);

module.exports = router;
