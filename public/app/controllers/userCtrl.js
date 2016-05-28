angular.module('userCtrl', [])

.controller('threadsCtrl', function($http, $scope, $routeParams) {

    $scope.threads = {};
    $http.get('https://still-earth-13848.herokuapp.com/api/threads/' + $routeParams.id + '.json', {
        headers: {'X-Api-Key': 'W4cMakBP2LelZFjtEEzM0gtt'}
    })
    .success(function(data) {
        $scope.threads = data;
    });

    $scope.likeComment = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/comments/' + id + '/like', {
            headers: {'X-Api-Key': 'W4cMakBP2LelZFjtEEzM0gtt'}
        })
    };

    $scope.likeReply = function(id) {
        $http.put('https://still-earth-13848.herokuapp.com/api/replies/' + id + '/like', {
            headers: {'X-Api-Key': 'W4cMakBP2LelZFjtEEzM0gtt'}
        });
    };

})

.controller('userCtrl', function($http, $scope, $routeParams) {

    $scope.user = {};
    $http.get('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '.json')
    .success(function(data) {
        $scope.user = data;
    });

    $scope.edit = function(about) {
        $http.put('https://still-earth-13848.herokuapp.com/api/users/' + $routeParams.id + '?about=' + about);
    };
});
