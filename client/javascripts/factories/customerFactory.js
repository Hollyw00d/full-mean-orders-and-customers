// client factory

// create the CustomerFactory and pass in the "$http" service/function
customers_app.factory("CustomerFactory", function($http) {
    var factory = {};
    //var customers = [];
    factory.getCustomers = function(callback) {
        // the "$http" service is a function that takes a single argument
        // that is used to generate an HTTP request and
        // returns two "$http" specific methods:
        // - "success"
        // - "error"
        $http.get("/customers").success(function(output) {
            customers = output;
            callback(customers);
        });
    };
    // note the use of callbacks!
    factory.addCustomer = function(info, callback) {

        $http.post("/save", info).success(function() {
            customers.push({name: info.name});
            callback(customers);
        });

    };
    return factory;
});