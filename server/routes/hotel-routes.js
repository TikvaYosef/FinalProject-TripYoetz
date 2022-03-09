const hotelsRoutes = require("express").Router();

const { GetHotels, UpdateHotel, DeleteHotel,AddHotels } = require("../controllers/hotel-controller");
hotelsRoutes.get("/", GetHotels);
hotelsRoutes.post("/", AddHotels);
hotelsRoutes.put("/:id",UpdateHotel);
hotelsRoutes.delete("/:id",DeleteHotel)

module.exports = hotelsRoutes;