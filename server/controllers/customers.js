// server controller

// First add the following two lines at the top of the customers controller so that we can access our model through var Customer
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');


// this is our customers.js file located at /server/controllers/customers.js
// note the immediate function and the object that is returned
module.exports = (function() {
    return {
        show: function(req, res) {

            // Show customer documents from the
            // "FullMean" Mongo database
            Customer.find({}, function(err, results) {
                if(err) {
                    console.log("Mongo Database Show customers Errors:", err);
                }
                else {
                    res.json(results);
                }

            });
        },

        saveCustomer: function(req, res) {

            var customer = new Customer(req.body);

            customer.save(function(err) {


                if(err) {
                    console.log("Adding customer error:", err);
                    res.redirect("/");
                }
                else {

                    console.log("Customer POSTED", customer);

                    res.redirect("/");

                }

            });

        },


        deleteCustomer: function(req, res) {

            Customer.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log("Customer delete error:", err);
                }
                else {
                    console.log("Customer deleted!");
                    res.redirect("/customers");
                }

            });

        }

    }
})();