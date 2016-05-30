angular.module('app.routes',['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl : 'app/views/pages/submissions.html',
			controller: 'submissionCtrl'
		})
		.when('/submissions/new', {
			templateUrl: 'app/views/pages/submit.html',
			controller: 'newSubmissionCtrl'
		})
		.when('/submissions/:id', {
			templateUrl: 'app/views/pages/submission.html',
			controller: 'singleSubmissionCtrl'
		})
		.when('/comments/:id', {
			templateUrl: 'app/views/pages/comment.html',
			controller: 'commentCtrl'
		})
		.when('/ask', {
			templateUrl: 'app/views/pages/ask.html',
			controller: 'askCtrl'
		})
		.when('/threads/:id', {
			templateUrl: 'app/views/pages/threads.html',
			controller: 'threadsCtrl'
		})
		.when('/users/:id/submissions', {
			templateUrl: 'app/views/pages/submissions.html',
			controller: 'userSubmissionsCtrl'
		})
		.when('/users/:id/comments', {
			templateUrl: 'app/views/pages/comments.html',
			controller: 'userCommentsCtrl'
		})
		.when('/users/:id', {
			templateUrl: 'app/views/pages/user.html',
			controller: 'userCtrl'
		})
		.otherwise({ templateUrl: 'app/views/pages/404.html' })

	$locationProvider.html5Mode(true);

});
