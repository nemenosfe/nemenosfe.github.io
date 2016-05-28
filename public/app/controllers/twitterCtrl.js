angular.module('twitterCtrl', ['jooxAngular.services'])

.controller('twitterCtrl', function($rootScope, $scope, $q, twitterService, $http) {
    twitterService.initialize();

    //when the user clicks the connect twitter button, the popup authorization window opens
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                //if the authorization is successful, hide the connect button and display the tweets
                $('#connectButton').fadeOut(function() {
                    $('#getTimelineButton, #signOut').fadeIn();
                    $scope.connectedTwitter = true;
                    $scope.getUserInfo();
                });
            } else {

            }
        });
    }

    $scope.getUserInfo = function() {
        twitterService.getUserInfo().then(function(data) {
            $scope.id = data.id;
            $scope.screen_name = data.screen_name;
            $scope.name = data.name;
            console.log("Id: " + $scope.id);
            console.log("Name: " + $scope.screen_name);
            $http.post('https://still-earth-13848.herokuapp.com/api/login?uid=' + $scope.id + '&name=' + $scope.screen_name)
            .success(function(data) {
                console.log(data['api_key']);
                $rootScope.token = data['api_key'];
                $rootScope.userID = data['id'];
                $rootScope.connected = true;
                $rootScope.userName = $scope.name;
                console.log($rootScope.connected);
                console.log($rootScope.userName);
                console.log($rootScope.userID);
            })
        })
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $('#getTimelineButton, #signOut').fadeOut(function() {
            $('#connectButton').fadeIn();
            $scope.$apply(function() {
                $scope.connectedTwitter = false
                $rootScope.token = null;
                $rootScope.userID = null;
                $rootScope.connected = false;
                $rootScope.userName = null;
                console.log($rootScope.token);
                console.log($rootScope.connected);
                console.log($rootScope.userName);
                console.log($rootScope.userID);
            })
        });
    }

    //if the user is a returning user, hide the sign in button and display the tweets
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut').show();
        $scope.connectedTwitter = true;
    }
});
