// client controller

// Now lets create a controller with some hardcoded data!
friends_app.controller("FriendsController", function($scope, FriendFactory) {


    // Display friends
    FriendFactory.getFriends(function (data) {
        $scope.friends = data;
    });


    $scope.addfriend = function() {

        FriendFactory.addFriend($scope.new_friend, function () {

            FriendFactory.getFriends(function (data) {

                $scope.friends = data;

            });

            $scope.new_friend = {};

        });

    };


});