angular.module('loginCtrl', [])

.controller('loginCtrl', function($scope, auth, store) {

    $scope.auth = auth;
    $scope.token = store.get('token');
    console.log(token);

    $scope.logout = function() {
        auth.signout();
        store.remove('profile');
        store.remove('token');
        $location.path('/login');
    }
});
