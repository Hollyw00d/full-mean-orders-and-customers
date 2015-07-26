// client controller

// Now lets create a controller with some hardcoded data!
customers_app.controller("customersController", function($scope, CustomerFactory) {


    // Display customers
    CustomerFactory.getCustomers(function (data) {
        $scope.customers = data;
    });


    $scope.addCustomer = function() {

        CustomerFactory.addCustomer($scope.new_customer, function () {

            CustomerFactory.getCustomers(function (data) {

                $scope.customers = data;

            });

            $scope.new_customer = {};

        });

    };


});