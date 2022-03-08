const resturantsRoutes = require("express").Router();

const { GetCities } = require("../controllers/resturan-controller");

resturantsRoutes.get("/", GetCities);

module.exports = resturantsRoutes;