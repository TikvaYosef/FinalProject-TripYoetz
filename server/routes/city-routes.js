const citiesRoutes = require("express").Router();

const { GetCities, GetCitieByName, AddCity, UpdateCity, DeleteCity } = require("../controllers/city-controller");

citiesRoutes.get("/", GetCities);
citiesRoutes.get("/:name", GetCitieByName);
citiesRoutes.post("/", AddCity);
citiesRoutes.put("/:id", UpdateCity);
citiesRoutes.delete("/:id", DeleteCity);






module.exports = citiesRoutes;