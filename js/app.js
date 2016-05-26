var app = angular.module('joox-angular',['ngRoute']);

app.controller('commentCtrl', function($scope, $http, $routeParams) {

    $scope.comment = $http.get('https://still-earth-13848.herokuapp.com/api/comments/' + $routeParams.id);

    $scope.newReply = function(text) {
        $http.post('https://still-earth-13848.herokuapp.com/api/replies?text=' + text + '&comment_id' + $routeParams.id);
        $scope.$apply();
    };

})

app.controller('askCtrl', function($scope, $http) {

    $scope.ask = $http.get('https://still-earth-13848.herokuapp.com/api/ask');

})

app.controller('submissionCtrl', function($scope, $http) {

    $scope.submissions = $http.get('https://joox-new-nemenosfe.c9users.io/api/submissions');
    $scope.text = "Prova per saber si funciona";

})

app.controller('singleSubmissionCtrl', function($scope, $http, $routeParams) {

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

app.controller('newSubmissionCtrl', function($scope, $http) {

    $scope.submission = {};

    $scope.postNew = function(title, text, url) {
        if(!text) $scope.submission = $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + title + '&url' + url);
        else if(!url) $scope.submission = $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + title + '&text' + text);
        $scope.$apply(function() { $location.path("/submissions/" + $scope.submission.id); });
    };

})

app.controller('threadsCtrl', function($http, $routeParams) {

    $scope.threads = $http.get('https://still-earth-13848.herokuapp.com/api/threads/' + $routeParams.id);

})

app.controller('userCtrl', function($http, $scope, $routeParams) {

    $scope.user = $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id);

    $scope.edit = function(about) {
        return $http.put('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '?about=' + about);

    };
})

app.controller('userSubmissionsCtrl', function($http, $scope, $routeParams) {

    $scope.submissions = $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '/submissions');

})

app.controller('userCommentsCtrl', function($http, $scope, $routeParams) {

    $scope.comments = $http.get('https://still-earth-13848.herokuapp.com/api/users/' + id + '/comments');

})

app.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl : '../submissions.html',
			controller: 'submissionCtrl'
		})

		.when('/submissions/new', {
			templateUrl: '../submit.html',
			controller: 'newSubmissionCtrl'
		})

		.when('submissions/:id', {
			templateUrl: '../submission.html',
			controller: 'singleSubmissionCtrl'
		})

		.when('/comments/:id', {
			templateUrl: '../comment.html',
			controller: 'commentCtrl'
		})

		.when('/ask', {
			templateUrl: '../ask.html',
			controller: 'askCtrl'
		})

		.when('/threads/:id', {
			templateUrl: '../threads.html',
			controller: 'threadsCtrl'
		})

		.when('/users/:id/submissions', {
			templateUrl: '../submissions.html',
			controller: 'userSubmissionsCtrl'
		})

		.when('/users/:id/comments', {
			templateUrl: '../comments.html',
			controller: 'userCommentsCtrl'
		})

		.when('/users/:id', {
			templateUrl: '../user.html',
			controller: 'userCtrl' // Per GET i PUT??
		})

		.otherwise({ templateUrl: '../404.html' })

	$locationProvider.html5Mode(true);

});
