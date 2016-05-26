angular.module('joox-routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'submissions.html',
			controller: 'submissionCtrl'
		})

		.when('/submissions/new', {
			templateUrl: 'submit.html',
			controller: 'newSubmissionCtrl'
		})

		.when('/submissions/:id', {
			templateUrl: 'submission.html',
			controller: 'singleSubmissionCtrl'
		})

		//Cal? /submissions no té vista
		/*.when('/submissions', {
			templateUrl: 'index.html',
			controller: 'submissionCtrl'
		})*/

		.when('/comments/:id', {
			templateUrl: 'comment.html',
			controller: 'commentCtrl'
		})

		.when('/ask', {
			templateUrl: 'ask.html',
			controller: 'askCtrl'
		})

		.when('/threads/:id', {
			templateUrl: 'threads.html',
			controller: 'threadsCtrl'
		})

		/*.when('/submissions/:id/like', {
			templateUrl: 'submission.html',
			controller: 'singleSubmissionCtrl', // Falta poder fer PUT
		})*/

		.when('/users/:id/submissions', {
			templateUrl: 'submissions.html',
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
			templateUrl: 'comments.html',
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
			templateUrl: 'user.html',
			controller: 'userCtrl' // Per GET i PUT??
		})

		.otherwise({ templateUrl: '404.html' })

	$locationProvider.html5Mode(true);

});
