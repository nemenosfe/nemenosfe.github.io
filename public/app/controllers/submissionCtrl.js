angular.module('submissionCtrl', [])

.controller('submissionCtrl', function($cookies, $cookieStore, $scope, $http, $window) {

    $scope.submissions = {};
    $scope.size = {};
    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');

    $http.get('https://still-earth-13848.herokuapp.com/api/submissions')
    .success(function(data) {
        $scope.submissions = data;
        $scope.submissions.sort( function(a, b) {
            return a.created_at < b.created_at;
        });
        $scope.size = Object.keys($scope.submissions).length + 1;
    });

    $scope.likeSubmission = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + id + '/like',null , {
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

.controller('askCtrl', function($cookies, $cookieStore, $scope, $http, $window) {

    $scope.ask = {};
    $scope.size = {};
    $scope.token = $cookies.get('api_key');
    $scope.userid = $cookies.get('userid');
    $scope.userName = $cookies.get('userName');
    $scope.connected = $cookies.get('connected');

    $http.get('https://still-earth-13848.herokuapp.com/api/ask')
    .success(function(data) {
        $scope.ask = data;
        $scope.size = Object.keys($scope.ask).length + 1;
        $scope.connected = $cookies.get('connected');
    });

    $scope.likeSubmission = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + id + '/like',null , {
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

.controller('singleSubmissionCtrl', function($scope, $http, $routeParams, $cookies, $cookieStore, $window) {

    $scope.submission = {};
    $scope.subData = {};

    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');



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

    $http.get('https://still-earth-13848.herokuapp.com/api/submissions/' + $routeParams.id)
    .success(function(data) {
        $scope.submission = data;
        $scope.correctData = $scope.getTime($scope.submission.created_at);
    });

    $scope.likeSubmission = function() {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + $routeParams.id + '/like',null , {
            headers: {'X-Api-Key': $scope.token}
        })
        .success (function(data){
            $window.location.reload();
        });
    };

    $scope.newComment = function(text) {
        $http.post('https://still-earth-13848.herokuapp.com/api/comments?text=' + $scope.subData.text + '&submission_id=' + $routeParams.id,null, {
          headers: {'X-Api-Key': $scope.token}
        })
    .success(function(data){
        $window.location.reload();
    });
  };

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

    $scope.getDate = function(createdat) {
        document.getElementById('time').innerHTML=createdat;
    };

})

.controller('userSubmissionsCtrl', function($cookies, $cookieStore, $http, $scope, $routeParams, $window) {

    $scope.submissions = {};

    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');

    $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '/submissions')
    .success(function(data) {
        $scope.submissions = data.reverse();
    });

    $scope.likeSubmission = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + id + '/like',null , {
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

.controller('newSubmissionCtrl', function($scope, $http, $location, $routeParams, $cookies, $cookieStore) {

    $scope.submission = {};
    $scope.subData = {};

    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');


    $scope.postNew = function() {
        if(angular.isUndefined($scope.subData.text)) {
            $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + $scope.subData.title + '&url=' + $scope.subData.url, null, {
                headers: {'X-Api-Key': $scope.token}
            })
            .success(function(data) {
              $location.path("/submissions/" + data['id']);
            });
        }
        else{
            $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + $scope.subData.title + '&text=' + $scope.subData.text, null, {
                headers: {'X-Api-Key': $scope.token}
            })
            .success(function(data) {
                $location.path("/submissions/" + data['id']);
            });
        }
    };

});
