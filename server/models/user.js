const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    first_name: { type: String, default: null },
    last_name: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
    phone_no:{type:Number},
    photo:{type:String}
}, { timestamps: true }));

module.exports = User;