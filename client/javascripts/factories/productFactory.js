// client factory

customers_app.factory("ProductFactory", function($http) {
    var factory = {};

    factory.getProducts = function(callback) {
        $http.get("/products").success(function(output) {
            products = output;
            callback(products);
        });
    };

    return factory;
});