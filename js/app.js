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

    $scope.submissions = $http.get('https://still-earth-13848.herokuapp.com/api/submissions');
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

		// route for the home page
		.when('/', {
			templateUrl : 'views/submissions.html',
			controller: 'submissionCtrl'
		})

		.when('/submissions/new', {
			templateUrl: 'views/submit.html',
			controller: 'newSubmissionCtrl'
		})

		.when('/submissions/:id', {
			templateUrl: 'views/submission.html',
			controller: 'singleSubmissionCtrl'
		})

		//Cal? /submissions no té vista
		/*.when('/submissions', {
			templateUrl: 'index.html',
			controller: 'submissionCtrl'
		})*/

		.when('/comments/:id', {
			templateUrl: 'views/comment.html',
			controller: 'commentCtrl'
		})

		.when('/ask', {
			templateUrl: 'views/ask.html',
			controller: 'askCtrl'
		})

		.when('/threads/:id', {
			templateUrl: 'views/threads.html',
			controller: 'threadsCtrl'
		})

		/*.when('/submissions/:id/like', {
			templateUrl: 'submission.html',
			controller: 'singleSubmissionCtrl', // Falta poder fer PUT
		})*/

		.when('/users/:id/submissions', {
			templateUrl: 'views/submissions.html',
			controller: 'userSubmissionsCtrl'
		})

		/*.when('/comments', {
			templateUrl: '../index.html', //tinc dubtes perque es un post XD
			controller: 'commentCtrl',
		})

		.when('/comments/:id/like', {
			templateUrl: '../comment.html',
			controller: 'commentCtrl' //Falta poder fer PUT
		})*/

		.when('/users/:id/comments', {
			templateUrl: 'views/comments.html',
			controller: 'userCommentsCtrl'
		})

		/*.when('/replies', {
			templateUrl: '../index.html',
			controller: 'repliesCtrl' //Falta aquest controllador per fer el POST (Crear una reply)
		})*/


		/*.when('/replies/:id/like', {
			templateUrl: '../index.html',
			controller: 'replyCtrl' //Falta per fer el put
		})*/

		.when('/users/:id', {
			templateUrl: 'views/user.html',
			controller: 'userCtrl' // Per GET i PUT??
		})

		.otherwise({ templateUrl: 'views/404.html' })

	$locationProvider.html5Mode(true);

});
