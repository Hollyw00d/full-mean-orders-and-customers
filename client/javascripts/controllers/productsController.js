// client controller

customers_app.controller("productsController", function($scope, ProductFactory) {

    ProductFactory.getProducts(function(data) {
        $scope.products = data;
    });

});