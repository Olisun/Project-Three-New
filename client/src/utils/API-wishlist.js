import axios from "axios";

export default {

  getItems: function() {
    return axios.get("/api/wishlist");
  },

  getUserItems: function(UserId) {
    return axios.get("/api/wishlist/" + UserId);
  },

  deleteItem: function(id) {
    return axios.delete("/api/wishlist/" + id);
  },

  updateItem: function(id) {
    return axios.put("/api/wishlist/" + id);
  },

  saveItem: function(wishListData) {
    return axios.post("/api/wishlist", wishListData);
  }
};