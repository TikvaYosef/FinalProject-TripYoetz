const hotels = require("../models/hotel-model");

module.exports = {
    GetHotels: async (req, res) => {
        try {
            const data = await hotels.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no hotels found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}