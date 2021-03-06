angular.module('userCtrl', [])

.controller('threadsCtrl', function($cookieStore, $cookies, $http, $scope, $routeParams, $rootScope, $window) {

    $scope.threads = {};
    $scope.token = $cookies.get('api_key');
    $scope.userName = $cookies.get('userName');
    $scope.userid = $cookies.get('userid');
    $scope.connected = $cookies.get('connected');
    $http.get('https://still-earth-13848.herokuapp.com/api/threads/' + $routeParams.id, {
        headers: {'X-Api-Key': $scope.token}
    })
    .success(function(data) {
        $scope.threads = data;
    });

    $scope.likeComment = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/comments/' + id + '/like',null , {
            headers: {'X-Api-Key': $scope.token}
        })
        .success (function(data){
            $window.location.reload();
        });
    };

    $scope.likeReply = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/replies/' + id + '/like',null , {
            headers: {'X-Api-Key': $scope.token}
        })
        .success (function(data){
            $window.location.reload();
        });
    };
    $scope.getTime = function(date) {
        if(!angular.isUndefined(date)) {
            var d = new Date(date.substring(0,4),parseInt((date.substring(5,7)))-1,date.substring(8,10),parseInt(date.substring(11,13))+2,date.substring(14,16),date.substring(17,19),date.substring(20,23));
            var seconds = Math.floor((new Date() - d) / 1000);

            var interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
                return interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " months";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " days";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes";
            }

            return Math.floor(seconds) + " seconds";
        }
        return "error";
    };

})

.controller('userCtrl', function($cookieStore, $cookies, $http, $scope, $routeParams, $window) {

    $scope.user = {};
    $scope.token = $cookies.get('api_key');
    $scope.userName = $cookies.get('userName');
    $scope.userid = $cookies.get('userid');
    $scope.connected = $cookies.get('connected');
    $scope.subData = {};
    $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id)
    .success(function(data) {
        $scope.user = data;
    });

    $scope.edit = function(about) {
        $http.put('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '?about=' + $scope.subData.about, null, {
            headers: {'X-Api-Key': $scope.token}
        })
        .success(function(data){
            $window.location.reload();
        });
    };
    $scope.getTime = function(date) {
        if(!angular.isUndefined(date)) {
            var d = new Date(date.substring(0,4),parseInt((date.substring(5,7)))-1,date.substring(8,10),parseInt(date.substring(11,13))+2,date.substring(14,16),date.substring(17,19),date.substring(20,23));
            var seconds = Math.floor((new Date() - d) / 1000);

            var interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
                return interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " months";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " days";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes";
            }

            return Math.floor(seconds) + " seconds";
        }
        return "error";
    };
});
