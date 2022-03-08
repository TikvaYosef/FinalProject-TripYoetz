const cities = require("../models/city-model");

module.exports = {
    GetCities: async (req, res) => {
        try {
            const data = await cities.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no cities found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}