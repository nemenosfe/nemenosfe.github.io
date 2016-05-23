angular.module('replyCtrl', [])

.controller('replyCtrl', function($http) {

    var vm = this;

    vm.new = function(text, id) {
        return $http.post('https://still-earth-13848.herokuapp.com/api/replies?text=' + text + '&comment_id' + id);
    };

    vm.like = function(id) {
        return $http.put('https://still-earth-13848.herokuapp.com/api/replies/' + id + '/like');
    };
});
