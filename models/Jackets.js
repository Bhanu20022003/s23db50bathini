const mongoose = require("mongoose")
const jacketSchema = mongoose.Schema({
jackets: String,
cost: Number,
brand:  String
})
module.exports = mongoose.model("Jackets",jacketSchema)