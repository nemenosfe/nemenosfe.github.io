angular.module('jooxAngular',['ngRoute', 'commentCtrl', 'submissionCtrl', 'userCtrl'])

.config(function($routeProvider, $locationProvider) {

	//$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$routeProvider
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
		.when('/users/:id/submissions', {
			templateUrl: 'views/submissions.html',
			controller: 'userSubmissionsCtrl'
		})
		.when('/users/:id/comments', {
			templateUrl: 'views/comments.html',
			controller: 'userCommentsCtrl'
		})
		.when('/users/:id', {
			templateUrl: 'views/user.html',
			controller: 'userCtrl' // Per GET i PUT??
		})
		.otherwise({ templateUrl: 'views/404.html' })

	$locationProvider.html5Mode(true);

});
