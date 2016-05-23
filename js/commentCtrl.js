angular.module('commentCtrl', [])

.controller('commentCtrl', function($http) {

    var vm = this;

    vm.get = function(id) {
        return $http.get('https://still-earth-13848.herokuapp.com/api/comments/' + id);
    };

    vm.new = function(text, id) {
        return $http.post('https://still-earth-13848.herokuapp.com/api/comments?text=' + text + '&submission_id=' + id);
    };

    vm.like = function(id) {
        return $http.put('https://still-earth-13848.herokuapp.com/api/comments/' + id + '/like');
    };
});
