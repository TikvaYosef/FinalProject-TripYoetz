const mongoose = require("mongoose");

const Hotel = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: String, required: true },
    activityHours: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    comments: { type: Array, required: true },
    greenPass: { type: Boolean, required: true },
    rating: { type: Array, required: true },
    q_a: { type: Array, required: true },
    link: { type: String, required: true },
    price: { type: Object, required: true },
    city: { type: String, required: true },
},
    { timestamps: true }
);

module.exports = mongoose.model("Hotel", Hotel);