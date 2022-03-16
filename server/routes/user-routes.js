const usersRoutes = require("express").Router();
const { register, login,UpdateFavorites } = require("../controllers/user-controller")

usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:id", UpdateFavorites);

module.exports = usersRoutes;