angular.module('submissionCtrl', [])

.controller('submissionCtrl', function($http) {

    var vm = this;

    vm.get = function(id) {
        return $http.get('https://still-earth-13848.herokuapp.com/api/submissions/' + id);
    };

    vm.all = function() {
        return $http.get('https://still-earth-13848.herokuapp.com/api/submissions');
    };

    vm.new = function(title, text, url) {
        //if(!title)
        if(!text) return $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + title + '&url' + url);
        else if(!url) return $http.post('https://still-earth-13848.herokuapp.com/api/submissions?title=' + title + '&text' + text);
        //else return error;
    };

    vm.like = function(id) {
        return $http.put('https://still-earth-13848.herokuapp.com/api/submissions/' + id + '/like');
    };

    vm.ask = function() {
        return $http.get('https://still-earth-13848.herokuapp.com/api/ask')
    };
});
