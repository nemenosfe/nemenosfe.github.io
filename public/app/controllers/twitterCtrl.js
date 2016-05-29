angular.module('twitterCtrl', ['jooxAngular.services'])

.controller('twitterCtrl', function($window, $location, $rootScope, $cookies, $cookieStore, $scope, $q, twitterService, $http) {
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
                    $location.path('/');
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
                $cookies.put('api_key', data['api_key']);
                $cookies.put('userid', data['id']);
                $cookies.put('connected', true);
                $cookies.put('userName', $scope.name);
                $window.location.reload();
                console.log($cookies.get('api_key'));
                console.log($cookies.get('connected'));
                console.log($cookies.get('userName'));
                console.log($cookies.get('userid'));
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
                $cookies.put('api_key', null);
                $cookies.put('userid', null);
                $cookies.put('connected', false);
                $cookies.put('userName', null);
                $window.location.reload();
                console.log($cookies.get('api_key'));
                console.log($cookies.get('connected'));
                console.log($cookies.get('userName'));
                console.log($cookies.get('userid'));
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
