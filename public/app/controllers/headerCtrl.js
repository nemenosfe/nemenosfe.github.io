angular.module('headerCtrl', [])

.controller('headerCtrl', function($scope, $http, $routeParams, $cookies, $cookieStore) {

    $scope.userid = $cookies.get('userid');
    $scope.userName = $cookies.get('userName');
    $scope.connected = $cookies.get('userName');
    console.log($scope.connected+"****");
    console.log($scope.userName+"****");
})

