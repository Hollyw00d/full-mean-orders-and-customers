// client controller
customers_app.controller("ordersController", function($scope, CustomerFactory, ProductFactory, OrderFactory) {


    /****** Use CustomerFactory ******/
    CustomerFactory.getCustomers(function (data) {
        $scope.customers = data;

        //console.log("$scope.customers[0].name:", $scope.customers[0].name);
    });

    $scope.addCustomer = function() {

        CustomerFactory.addCustomer($scope.new_customer, function (errors) {

            $scope.errors = errors;

            CustomerFactory.getCustomers(function (data) {
                $scope.customers = data;
            });

            $scope.new_customer = {};

        });

    };

    /****** Use ProductFactory ******/
    ProductFactory.getProducts(function(data) {
        $scope.products = data;
    });


    /****** Use OrderFactory ******/
    OrderFactory.getOrders(function(data) {
        $scope.orders = data;
    });

    $scope.addOrder = function() {

        OrderFactory.addOrder($scope.new_order, function(errors) {
            $scope.errors = errors;

            OrderFactory.getOrders(function(data) {
                $scope.orders = data;
            });

            console.log("$scope.new_order:", $scope.new_order);

            $scope.new_order = {};


        });
    };







});