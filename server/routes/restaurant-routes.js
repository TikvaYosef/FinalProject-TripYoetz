const restaurantsRoutes = require("express").Router();

const { GetRestaurants, AddRestaurant, UpdateRestaurant, DeleteRestaurant } = require("../controllers/restaurant-controller");

restaurantsRoutes.get("/", GetRestaurants);
restaurantsRoutes.post("/", AddRestaurant);
restaurantsRoutes.put("/:id", UpdateRestaurant)
restaurantsRoutes.delete("/:id", DeleteRestaurant)

module.exports = restaurantsRoutes;