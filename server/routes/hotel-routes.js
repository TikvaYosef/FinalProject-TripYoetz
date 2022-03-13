const hotelsRoutes = require("express").Router();

const { GetHotels, UpdateHotel, DeleteHotel, AddHotel } = require("../controllers/hotel-controller");

hotelsRoutes.get("/", GetHotels);
hotelsRoutes.post("/", AddHotel);
hotelsRoutes.put("/:id", UpdateHotel);
hotelsRoutes.delete("/:id", DeleteHotel);

module.exports = hotelsRoutes;