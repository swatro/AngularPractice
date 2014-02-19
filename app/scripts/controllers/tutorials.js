'use strict';

angular.module('angularProjecApp')
    .controller('TutorialsCtrl', function ($scope,myService) {
        $scope.tutorials= {};
        $scope.showTutorialForm = false;

        $scope.getJavascriptTutorials = function(){
          $scope.tutorials.header = 'Javascript';
            myService.getTutorialData(function(data){
                $scope.tutorials.list = data['Javascript'];
          });
        };

        $scope.getAgileTutorials = function(){
            $scope.tutorials.header = 'Agile';
            myService.getTutorialData(function(data){
              $scope.tutorials.list = data['Agile'];
          });
        };

        $scope.addATutorial = function(){

          $scope.showTutorialForm = true;
        };

        $scope.submitForm = function(){
//          console.log($scope.tutorialToAdd);
//          $http.put('/data/tutorials.json',$scope.tutorialToAdd).success(function(){
//                console.log("success");
//          });
        };

      });
