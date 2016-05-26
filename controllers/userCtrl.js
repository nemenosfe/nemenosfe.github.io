angular.module('userCtrl', [])

.controller('threadsCtrl', function($http, $routeParams) {

    $scope.threads = $http.get('https://still-earth-13848.herokuapp.com/api/threads/' + $routeParams.id);

})

.controller('userCtrl', function($http, $scope, $routeParams) {

    $scope.user = $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id);

    $scope.edit = function(about) {
        return $http.put('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '?about=' + about);

    };
})

.controller('userSubmissionsCtrl', function($http, $scope, $routeParams) {

    $scope.submissions = $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '/submissions');

});
