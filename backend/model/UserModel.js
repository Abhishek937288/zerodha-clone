const mongoose = require("mongoose");
const UsersSchema = require("../Schemas/UsersSchema");

const UsersModel = mongoose.model("User", UsersSchema);

module.exports = UsersModel;  
