import axios from "axios";

export default {

    getBudget: function () {
        return axios.get("/api/budget");
    },

    getBudgetProfile: function (id) {
        return axios.get("/api/budget/" + id);
    },

    deleteBudget: function (id) {
        return axios.delete("/api/budget/" + id);
    },

    updateBudget: function (id, body) {
        return axios.put("/api/budget/" + id, body);
    },

    saveBudget: function (budgetData) {
        return axios.post("/api/budget", budgetData);
    }
};