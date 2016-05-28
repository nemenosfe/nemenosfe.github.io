angular.module('jooxAngular',['app.routes', 'auth0', 'angular-storage', 'angular-jwt', 'commentCtrl', 'submissionCtrl', 'userCtrl', 'sessionCtrl', 'loginCtrl'])

.config( function myAppConfig ($rootScope, $routeProvider, authProvider, $httpProvider, $locationProvider,
  jwtInterceptorProvider) {

        authProvider.init({
            domain: 'jooxnews.eu.auth0.com',
            clientID: 'q4dEJAkBDwOBWloqHfmfIIlVcdxKDOLB',
            loginUrl: '/login'
        });

        authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
            console.log("Login Success");
            profilePromise.then(function(profile) {
                store.set('profile', profile);
                store.set('token', idToken);
                $rootScope.token = idToken;
            });
            $location.path('/');
        });

        //Called when login fails
        authProvider.on('loginFailure', function() {
            console.log("Error logging in");
            $location.path('/login');
        });

        //Angular HTTP Interceptor function
        jwtInterceptorProvider.tokenGetter = function(store) {
            return store.get('token');
        }

        //Push interceptor function to $httpProvider's interceptors
        $httpProvider.interceptors.push('jwtInterceptor');

})
.run(function(auth) {
    auth.hookEvents();
});
