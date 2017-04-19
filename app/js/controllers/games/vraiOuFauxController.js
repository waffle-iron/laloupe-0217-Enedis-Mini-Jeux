//Controller du jeux Vrai ou Faux du livret
angular.module('app')
    .controller('VraiOuFauxController', function($scope) {

      $scope.question1 = false;
      $scope.question2 = true;
      $scope.question3 = true;
      $scope.question4 = true;
      $scope.question5 = true;
    });
