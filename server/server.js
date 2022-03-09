require("dotenv").config()
require("./db")

const express = require("express")
const cors = require("cors");
const PORT = process.env.PORT || 9090
<<<<<<< HEAD
app.listen(PORT, () => console.log("server up"))

=======
const passport = require("passport");
const app = express();
>>>>>>> d6a40a6f8447d972f9ae8a7e209b07caeb5eaa80
const citiesRoutes = require("./routes/city-routes");
const hotelsRoutes = require("./routes/hotel-routes");
const restaurantsRoutes = require("./routes/restaurant-routes")
const activitiesRoutes = require("./routes/activity-routes")
 
require("./config/passport")(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => console.log("server up"))

app.use(passport.initialize());

app.use("/api/cities", citiesRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/restaurants", restaurantsRoutes);
app.use("/api/activities", activitiesRoutes);