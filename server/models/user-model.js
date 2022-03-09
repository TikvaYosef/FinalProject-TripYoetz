// שם פרטי, שם משפחה, תאריך לידה, אימייל, סיסמה, קישור לתמונה והאם אדמין.

const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true , unique:true,match: /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
    password: { type: String, required: true },
    image: { type: String },
    isAdmin: { type: Boolean, required: true },
    isLogin: { type: Boolean, required: true, default: false },
    lastVisit: { type: Date },
    
},
    { timestamps: true }
);

module.exports = mongoose.model("User", User);