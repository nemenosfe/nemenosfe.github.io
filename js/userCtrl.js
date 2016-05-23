angular.module('userCtrl', [])

.controller('userCtrl', function($http) {

    var vm = this;

    vm.get = function(id) {
        return $http.get('https://still-earth-13848.herokuapp.com/api/users/' + id);
    };

    vm.edit = function(id, about) {
        return $http.put('https://still-earth-13848.herokuapp.com/api/users/' + id + '?about=' + about);
    };

    vm.threads = function(id) {
        return $http.get('https://still-earth-13848.herokuapp.com/api/threads/' + id);
    }

    vm.submissions = function(id) {
        return $http.get('https://still-earth-13848.herokuapp.com/api/users/' + id + '/submissions');
    }

    vm.comments = function(id) {
        return $http.get('https://still-earth-13848.herokuapp.com/api/users/' + id + '/comments');
    }
});
