const mongoose = require("mongoose");


const connection = mongoose.connect("mongodb+srv://rajparmar:rajparmar@cluster0.6tuwvig.mongodb.net/users?retryWrites=true&w=majority");

module.exports = {
    connection
}