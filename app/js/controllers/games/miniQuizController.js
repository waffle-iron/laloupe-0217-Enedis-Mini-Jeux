angular.module('app')
    .controller('miniQuizController', function($scope) {
      $scope.vrai = function vrai(){
        console.log("bravo");
      };
      $scope.faux = function faux(){
        console.log("mauvaise reponse");
      };
    });
