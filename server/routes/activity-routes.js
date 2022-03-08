const activitiesRoutes = require("express").Router();

const { GetActivities } = require("../controllers/activity-controller");

activitiesRoutes.get("/", GetActivities);

module.exports = activitiesRoutes;