angular.module('app')
    .controller('BoucheTrouController', function($scope) {
        $scope.holes = [];
        $scope.words = [
            'blesser',
            'électrique',
            'nettoyer',
            'débrancher'
        ];
        $scope.onDrop = function(e) {
            console.log("DROPPED:", e);
        };
    });
