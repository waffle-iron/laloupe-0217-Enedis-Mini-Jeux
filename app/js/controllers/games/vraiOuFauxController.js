//Controller du jeux Vrai ou Faux du livret
angular.module('app')
    .controller('VraiOuFauxController', function($scope) {

      $scope.question1 = 'Aucun risque de s\'électrocuter si l\'on utilise un sèche-cheveux avec les mains mouillées';
      $scope.question2 = 'Si je touche un lave-linge qui grésille ou qui picote le bout de mes doitgs, je préviens tout de suite mes parents';
      $scope.question3 = '  Il n\'est pas dangereux de se servir d\'un appareil électrique dans l\'eau';
      $scope.question4 = 'Pour faire sécher sa serviette plus vite, on peut la poser sur le radiateur électrique, meme si ce n\'est pas un sèche serviette';
      $scope.question5 = 'Aucun risque de s\'électrocuter si l\'on utilise un sèche-cheveux avec les mains mouillées';

      $scope.tableQuestion = [$scope.question1,$scope.question2,$scope.question3,$scope.question4,$scope.question5,];





    });


// faux vrai faux faux vrai
