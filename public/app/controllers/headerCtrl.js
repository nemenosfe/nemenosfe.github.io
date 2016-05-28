angular.module('headerCtrl', [])

.controller('headerCtrl', function($rootScope,$scope, $http, $routeParams) {
    $scope.userid = $rootScope.userid;
});
