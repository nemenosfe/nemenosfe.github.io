angular.module('headerCtrl', [])

.controller('headerCtrl', function($scope, $http, $routeParams, $cookies, $cookieStore, $window) {

    $scope.userid = $cookies.get('userid');
    $scope.userName = $cookies.get('userName');
    //$scope.connected = false;
    //if( $cookies.get('connected') == null){
    if(angular.isUndefined($cookies.get('connected'))) {
        $scope.connected = false;
        $cookies.put('connected',false);
        $window.location.reload();
    }
    else {
        $scope.connected = $cookies.get('connected');
    }
})
