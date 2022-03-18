const usersRoutes = require("express").Router();
const { register, login,UpdateFavorites } = require("../controllers/user-controller")

usersRoutes.post("/register", register);
usersRoutes.post("/login", login);

module.exports = usersRoutes;