// server controller

var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = (function() {
    return {
        showProducts: function(req, res) {
            Product.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Show Products Error:", err);
                }
                else {
                    res.json(results);
                }
            });
        }

    }

})();