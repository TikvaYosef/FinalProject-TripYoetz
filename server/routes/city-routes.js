const citiesRoutes = require("express").Router();

const { GetCities } = require("../controllers/city-controller");

citiesRoutes.get("/", GetCities);

module.exports = citiesRoutes;