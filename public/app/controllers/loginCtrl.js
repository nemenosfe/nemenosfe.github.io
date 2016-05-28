angular.module('loginCtrl', [])

.controller('loginCtrl', function($scope, auth) {

    $scope.auth = auth;

    $scope.logout = function() {
        auth.signout();
        store.remove('profile');
        store.remove('token');
        $location.path('/login');
    }
});
