const activitiesRoutes = require("express").Router();

const { GetActivities, AddActivities, UpdateActivities, DeleteActivities } = require("../controllers/activity-controller");

activitiesRoutes.get("/", GetActivities);
activitiesRoutes.post("/", AddActivities);
activitiesRoutes.put("/:id", UpdateActivities);
activitiesRoutes.delete("/:id", DeleteActivities);

module.exports = activitiesRoutes;