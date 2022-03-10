
const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: { type: String },
    lastName: { type: String },
    birthDate: { type: Date },
    email: { type: String ,  },
    password: { type: String },
    image: { type: String },
    isAdmin: { type: Boolean},
    isLogin: { type: Boolean, default: false },
    lastVisit: { type: Date },
    
},
    { timestamps: true }
);

module.exports = mongoose.model("User", User);