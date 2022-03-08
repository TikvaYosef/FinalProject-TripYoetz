const activities = require("../models/activity-model");

module.exports = {
    GetActivities: async (req, res) => {
        try {
            const data = await activities.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no activities found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}