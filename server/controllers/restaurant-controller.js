const restaurants = require("../models/restaurant-model");

module.exports = {
    GetRestaurants: async (req, res) => {
        try {
            const data = await restaurants.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no restaurants found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}