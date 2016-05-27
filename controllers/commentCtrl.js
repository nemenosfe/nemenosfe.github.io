angular.module('commentCtrl', [])

.controller('commentCtrl', function($scope, $http, $routeParams) {

    $scope.comment = $http.get('https://still-earth-13848.herokuapp.com/api/comments/' + $routeParams.id + '.json');

    $scope.newReply = function(text) {
        $http.post('https://still-earth-13848.herokuapp.com/api/replies?text=' + text + '&comment_id' + $routeParams.id + '.json');
        $scope.$apply();
    };
})

.controller('userCommentsCtrl', function($http, $scope, $routeParams) {

    $scope.comments = $http.get('https://still-earth-13848.herokuapp.com/api/users/' + id + '/comments.json');

});
