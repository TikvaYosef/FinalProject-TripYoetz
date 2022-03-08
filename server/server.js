require("dotenv").config()
const express = require("express")
require("./db")
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 9090
app.listen(PORT, () => console.log("server up"))


const citiesRoutes = require("./routes/city-routes");
const hotelsRoutes = require("./routes/hotel-routes");
const restaurantsRoutes = require("./routes/restaurant-routes")
const activitiesRoutes = require("./routes/activity-routes")

app.use("/cities", citiesRoutes);
app.use("/hotels", hotelsRoutes);
app.use("/restaurants", restaurantsRoutes);
app.use("/activities", activitiesRoutes);