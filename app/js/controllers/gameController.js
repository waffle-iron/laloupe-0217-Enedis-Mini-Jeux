/*
* Ce controller contient toute la logique pour faire parler Greg et Léa
* Les controllers inclus dans la page peuvent communiquer avec ce controller en faisant :
* ```
* var popups = {
*
* }
* $scope.$emit('popups', popups)
* ```
*/
angular.module('app')
    .controller('GameController', function($scope) {
        $scope.bulle = {
            show: false,
            character: '',
            content: ''
        };

        /*
        * Affiche les messages intercptés
        */
        function showBulle($event, bulle) {
            $scope.bulle = bulle;
        }

        /*
        * Intercepte le message envoyé par le contrôleur du jeu inclus dans la page
        */
        $scope.$on('bulle', showBulle);
    });
