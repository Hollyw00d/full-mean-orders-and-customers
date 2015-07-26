// client factory

// create the FriendFactory and pass in the "$http" service/function
friends_app.factory("FriendFactory", function($http) {
    var factory = {};
    //var friends = [];
    factory.getFriends = function(callback) {
        // the "$http" service is a function that takes a single argument
        // that is used to generate an HTTP request and
        // returns two "$http" specific methods:
        // - "success"
        // - "error"
        $http.get("/friends").success(function(output) {
            friends = output;
            callback(friends);
        });
    };
    // note the use of callbacks!
    factory.addFriend = function(info, callback) {

        $http.post("/save", info).success(function() {
            friends.push({name: info.name, age: info.age});
            callback(friends);
        });

    };
    return factory;
});