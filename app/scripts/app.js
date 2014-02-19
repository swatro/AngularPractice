'use strict';

angular.module('angularProjecApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tutorials',{
        templateUrl: 'views/tutorials.html',
        controller: 'TutorialsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('myService', function($http){
    return {
        getTutorialData: function(callback){
            $http.get('/data/tutorials.json').success(callback);
        }
    };
  });
