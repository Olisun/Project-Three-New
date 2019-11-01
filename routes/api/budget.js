<<<<<<< HEAD
const router = require("express").Router();
=======
const router = require("express").Router();
const budgetController = require("../../controllers/budgetcontroller");

// Matches with "/api/budget"
router.route("/")
    .get(budgetController.findAll)
    .post(budgetController.create);

// Matches with "/api/budget/:id"
router
    .route("/:id")
    .get(budgetController.findById)
    .put(budgetController.update)
    .delete(budgetController.remove);

module.exports = router;
>>>>>>> 7343ea10226c570444192077cfbc03903b4bb12b
