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
  .factory('myService', function(){
    var data = {
        "Javascript": [{name: "example name", url: "thisurl.com"}],
        "Agile": [{name: "example agile", url: "agile.com"}]
    };
    return {
        getTutorialData: function(callback){
            callback(data);
        },
        addTutorialData: function(input){
            data[input.type].push(input.tutorial);
        }
    };
  });