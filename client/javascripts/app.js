// client app.js

// Lets create our angular module
var customers_app = angular.module("customers_app", ["ngRoute"]);

// Get routes for partials
customers_app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/orders.html"
        })
        .when("/customers", {
            templateUrl: "partials/customers.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});