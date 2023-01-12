const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username: String,   //{ type: String, required: true, unique: true },
    email: String,   //{ type: String, required: true, unique: true },
    DOB: String,   //{ type: Date, required: true},
    isAdmin: Boolean,   //{ type: Boolean, required: true, default : false},
    location: String,   //{ type: String, required: true},
    password: String   //{ type: String, required: true}
});

const UserModel = mongoose.model("userData", userSchema);


module.exports = {
    UserModel
}