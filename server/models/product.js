// server model
var mongoose = require("mongoose");

var ProductsSchema = new mongoose.Schema({
    name: { type: String, trim: true }
});

mongoose.model("Product", ProductsSchema);