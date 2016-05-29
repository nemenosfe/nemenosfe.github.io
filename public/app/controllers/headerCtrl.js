angular.module('headerCtrl', [])

.controller('headerCtrl', function($scope, $http, $routeParams, $cookies, $cookieStore) {

    $scope.userid = $cookies.get('userid');
    $scope.userName = $cookies.get('userName');
    if( $cookies.get('connected') == null){
        $scope.connected = false;
        $cookies.put('connected',false);
    }
    else {
        $scope.connected = $cookies.get('connected');
    }
    console.log($scope.connected+"****");
    console.log($scope.userName+"****");
})
