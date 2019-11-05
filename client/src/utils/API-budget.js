import axios from "axios";

export default {

    getBudget: function () {
        return axios.get("/api/budget");
    },

    getBudgetCategory: function (id) {
        return axios.get("/api/budget/" + id);
    },

    deleteBudget: function (id) {
        return axios.delete("/api/budget/" + id);
    },

    updateBudget: function (id) {
        return axios.put("/api/budget/" + id);
    },

    saveBudget: function (budgetData) {
        return axios.post("/api/budget", budgetData);
    }
};