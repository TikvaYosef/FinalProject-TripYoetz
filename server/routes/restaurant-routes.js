const restaurantsRoutes = require("express").Router();

const { GetRestaurants } = require("../controllers/restaurant-controller");

restaurantsRoutes.get("/", GetRestaurants);

module.exports = restaurantsRoutes;