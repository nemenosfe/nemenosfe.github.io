angular.module('commentCtrl', [])

.controller('commentCtrl', function($cookies, $cookieStore, $scope, $http, $routeParams, $location) {

    $scope.comment = {};
    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');
    $scope.commentData = {};

    $http.get('https://still-earth-13848.herokuapp.com/api/comments/' + $routeParams.id)
    .success(function(data) {
        $scope.comment = data;
    });

    $scope.newReply = function(text) {
        $http.post('https://still-earth-13848.herokuapp.com/api/replies?text=' + $scope.commentData.text + '&comment_id=' + $routeParams.id, null, {
            headers: {'X-Api-Key': $scope.token}
        })
        .success(function(data){
            console.log(data);
            $location.path("/submissions/" + data['submission_id']);
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

.controller('userCommentsCtrl', function($cookies, $cookieStore, $http, $scope, $routeParams, $window) {

    $scope.comments = {};

    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');

    $scope.likeComment = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/comments/' + id + '/like',null , {
            headers: {'X-Api-Key': $scope.token}
        })
        .success (function(data){
            $window.location.reload();
        });
    };

    $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '/comments')
    .success(function(data) {
        $scope.comments = data;
    });



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
