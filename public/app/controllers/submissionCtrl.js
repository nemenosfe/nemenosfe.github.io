angular.module('submissionCtrl', [])

.controller('submissionCtrl', function($scope, $http) {

    $scope.submissions = {};
    $scope.size = {};

    $http.get('https://still-earth-13848.herokuapp.com/api/submissions')
    .success(function(data) {
        $scope.submissions = data.reverse();
        $scope.size = Object.keys($scope.submissions).length + 1;
    });

    $scope.likeSubmission = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + id + '/like', {
            headers: {'X-Api-Key': 'W4cMakBP2LelZFjtEEzM0gtt'}
        })
    };

    $scope.getTime = function(date) {
        var d = new Date(date.substring(0,4),(date.substring(5,7))-1,date.substring(8,10),date.substring(11,13),date.substring(14,16),date.substring(17,19),date.substring(20,23));
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
    };

})

.controller('askCtrl', function($cookies, $cookieStore, $scope, $http) {

    $scope.ask = {};
    $scope.size = {};

    $http.get('https://still-earth-13848.herokuapp.com/api/ask')
    .success(function(data) {
        $scope.ask = data;
        $scope.size = Object.keys($scope.ask).length + 1;
        $scope.connected = $cookies.get('connected');
    });

    $scope.getTime = function(date) {
        var d = new Date(date.substring(0,4),(date.substring(5,7))-1,date.substring(8,10),date.substring(11,13),date.substring(14,16),date.substring(17,19),date.substring(20,23));
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
    };

})

.controller('singleSubmissionCtrl', function($scope, $http, $routeParams) {

    $scope.submission = {};


    $scope.getTime = function(date) {
        var d = new Date(date.substring(0,4),(date.substring(5,7))-1,date.substring(8,10),date.substring(11,13),date.substring(14,16),date.substring(17,19),date.substring(20,23));

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
    };

    $http.get('https://still-earth-13848.herokuapp.com/api/submissions/' + $routeParams.id)
    .success(function(data) {
        $scope.submission = data;
        $scope.correctData = $scope.getTime($scope.submission.created_at);
    });

    $scope.likeSubmission = function() {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + $routeParams.id + '/like');
    };

    $scope.newComment = function(text) {
        $http.post('https://still-earth-13848.herokuapp.com/api/comments?text=' + text + '&submission_id=' + $routeParams.id);
    };

    $scope.likeComment = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/comments/' + id + '/like');
    };

    $scope.likeReply = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/replies/' + id + '/like');
    };

    $scope.getDate = function(createdat) {
        document.getElementById('time').innerHTML=createdat;
    };

})

.controller('userSubmissionsCtrl', function($http, $scope, $routeParams) {

    $scope.submissions = {};
    $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '/submissions')
    .success(function(data) {
        $scope.submissions = data.reverse();
    });

    $scope.getTime = function(date) {
        var d = new Date(date.substring(0,4),(date.substring(5,7))-1,date.substring(8,10),date.substring(11,13),date.substring(14,16),date.substring(17,19),date.substring(20,23));
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
    };

})

.controller('newSubmissionCtrl', function($scope, $http, $location, $routeParams, $cookies, $cookieStore) {

    $scope.submission = {};
    $scope.subData = {};

    $scope.connected = $cookies.get('connected');
    $scope.token = $cookies.get('api_key');


    $scope.postNew = function() {
      console.log($scope.token);
        if($scope.subData.text != "") {
          console.log("primer post");
            $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + $scope.subData.title + '&url=' + $scope.subData.url, null, {
                headers: {'X-Api-Key': $scope.token}
            })
            .success(function(data) {
                $scope.submission = data;
            });
        }
        else if($scope.subData.url != "") {
          console.log("segon post");
            $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + $scope.subData.title + '&text=' + $scope.subData.text, null, {
                headers: {'X-Api-Key': $scope.token}
            })
            .success(function(data) {
                $scope.submission = data['id'];
            });
        }
        $location.path("/submissions/" + $scope.submission);
    };

});
