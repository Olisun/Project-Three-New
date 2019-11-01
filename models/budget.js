const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    income: {type: Number, required: true},
    rent: Number,
    utilities: Number,
    food: Number,
    transportation: Number,
    misc: Number
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;