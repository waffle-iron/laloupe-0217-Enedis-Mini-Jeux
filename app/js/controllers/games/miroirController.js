angular.module('app')
    .controller('miroirController', function($scope) {
      /* Here is your main controller */
            $scope.solution = 'quel que soit le sport surtout ne t approche pas des lignes electriques';
            $scope.solution1 = 'quel que soit le sport surtout ne t approche pas des ligne electrique';
            $scope.solution2 = 'quel que soit le sport surtout ne t\' approches pas des ligne electriques';
            $scope.solution3 = 'quel que soit le sport surtout ne t\' approche pas des lignes electriques';
            $scope.reponse = '';
            $scope.compare = function () {
              if ($scope.reponse.toLowerCase().trim() === $scope.solution || $scope.solution1 || $scope.solution2 || $scope.solution3) {
                console.log('Bravo!');
              } else {
                console.log("Essaye Encore !!");
            }
            };
    });
//.toLowerCase.trim