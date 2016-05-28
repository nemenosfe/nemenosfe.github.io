angular.module('twitterCtrl', ['jooxAngular.services'])

.controller('twitterCtrl', function($scope, $q, twitterService, $http) {
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
            $scope.name = data.screen_name;
            console.log("Id: " + $scope.id);
            console.log("Name: " + $scope.name);
            $http.post('https://joox-new-nemenosfe.c9users.io/api/login?uid=' + $scope.id + '&name=' + $scope.name)
            .success(function(data) {
                console.log(data);
            })
            /*var data = $.param({
                uid: $scope.id,
                name: $scope.name
            })*/
            /*var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }*/
            /*$http.post(url, data, config)
                .then(
                    function(response) {
                        console.log("Token: " + JSON.stringify(response));
                    },
                    function(response) {
                        console.log("Error: " + JSON.stringify(response));
                    }
                );*/
            })
    }

    //sign out clears the OAuth cache, the user will have to reauthenticate when returning
    $scope.signOut = function() {
        twitterService.clearCache();
        $('#getTimelineButton, #signOut').fadeOut(function() {
            $('#connectButton').fadeIn();
            $scope.$apply(function() {
                $scope.connectedTwitter = false
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
