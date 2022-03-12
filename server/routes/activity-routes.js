const activitiesRoutes = require("express").Router();

const { GetActivities, AddActivity, UpdateActivity, DeleteActivity } = require("../controllers/activity-controller");

activitiesRoutes.get("/", GetActivities);
activitiesRoutes.post("/", AddActivity);
activitiesRoutes.put("/:id", UpdateActivity);
activitiesRoutes.delete("/:id", DeleteActivity);

module.exports = activitiesRoutes;