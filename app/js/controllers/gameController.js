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
        $scope.popups = {
            'Lea': {
                show: false,
                content: ''
            },
            'Greg': {
                show: false,
                content: ''
            }
        };

        /*
        * Affiche les messages intercptés
        */
        function showPopups($event, popups) {
            for (var character in popups) {
                $scope.popups[character].show = popups[character].show === undefined ? $scope.popups[character].show : popups[character].show;
                $scope.popups[character].content = popups[character].content === undefined ? $scope.popups[character].content : popups[character].content;
            }
        }

        /*
        * Intercepte le message envoyé par le contrôleur du jeu inclus dans la page
        */
        $scope.$on('popups', showPopups);
    });
