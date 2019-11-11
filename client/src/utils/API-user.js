import axios from "axios";

export default {

    getUsers: function () {
        return axios.get("/api/user");
    },

    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },

    createUser: function (userData) {
        return axios.post("/api/user", userData);
    }
};