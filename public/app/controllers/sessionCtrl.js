angular.module('sessionCtrl', [])

.controller('sessionCtrl', function($scope) {

  $scope.login = function() {
    console.log('lala')
    OAuth.initialize('jfL0GgqhhIFFFMLzoxYAFV0BYX8');
    OAuth.popup('twitter', {cache: true}).done(function(result) {
      //use result.access_token in your API request
      //or use result.get|post|put|del|patch|me methods (see below)
      console.log(result)
    }).fail(function (err) {
      //handle error with err
      console.log(err)
    });
  };

});
