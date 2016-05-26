angular.module('submissionCtrl', [])

.controller('submissionCtrl', function($scope, $http) {

    //$scope.submissions = $http.get('https://still-earth-13848.herokuapp.com/api/submissions.json');

    $http.get('https://still-earth-13848.herokuapp.com/api/submissions.json')
    .success(function(data) {
        console.log(data);
        $scope.submissions  = data.reverse();
    });

})

.controller('askCtrl', function($scope, $http) {

    $scope.ask = $http.get('https://still-earth-13848.herokuapp.com/api/ask');

})

.controller('singleSubmissionCtrl', function($scope, $http, $routeParams) {

    $scope.submission = $http.get('https://still-earth-13848.herokuapp.com/api/submissions/' + $routeParams.id);

    $scope.likeSubmission = function() {
        $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + $routeParams.id + '/like');
        $scope.$apply();
    };

    $scope.newComment = function(text) {
        $http.post('https://still-earth-13848.herokuapp.com/api/comments?text=' + text + '&submission_id=' + $routeParams.id);
        $scope.$apply();
    };

    $scope.likeComment = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/comments/' + id + '/like');
        $scope.$apply();
    };

    $scope.likeReply = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/replies/' + id + '/like');
        $scope.$apply();
    };

})

.controller('newSubmissionCtrl', function($scope, $http) {

    $scope.submission = {};

    $scope.postNew = function(title, text, url) {
        if(!text) $scope.submission = $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + title + '&url' + url);
        else if(!url) $scope.submission = $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + title + '&text' + text);
        $scope.$apply(function() { $location.path("/submissions/" + $scope.submission.id); });
    };

});
