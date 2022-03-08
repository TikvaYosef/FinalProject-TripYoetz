const hotelsRoutes = require("express").Router();

const { GetHotels } = require("../controllers/hotel-controller");

hotelsRoutes.get("/", GetHotels);

module.exports = hotelsRoutes;