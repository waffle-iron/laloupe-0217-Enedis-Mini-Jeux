angular.module('app')
    .controller('BoucheTrouController', function($scope, $timeout) {
        /*
         * La solution (les mots sont dans le bonne ordre)
         */
        var WORDS = [
            'débrancher',
            'électrique',
            'nettoyer',
            'blesser'
        ];
        Object.freeze(WORDS); // rend constant WORDS, ce qui est utile pour éviter des bugs

        $scope.words = WORDS.slice(0); // copie l'array (puisque WORDS est constant);
        $scope.holes = WORDS.map(function() {
            return "";
        }); // pour que words et holes soient bien de la même longueure

        /*
         * Vérifie la solution
         */
        function checkSolution(proposedSolution) {
            return proposedSolution.length === WORDS.length && proposedSolution.every(function(word, index) {
                return word === WORDS[index];
            });
        }

        /*
         * Gère ce qu'il faut faire lorsque le jeu se termine
         */
        function endGame() {
            var popups = {
                'Greg': {
                    content: 'Bien joué !',
                    show: true
                },
                'Lea': {
                    content: '',
                    show: false
                }
            };
            $scope.$emit('popups', popups);
        }

        /*
         * Gère ce qu'il faut faire en cas d'échec
         */
        function tryAgain() {
            var allFilled = $scope.holes.every( function (hole) {
                return hole !== '';
            });
            if (allFilled) {
                var popups = {
                    'Lea': {
                        show: true,
                        content: "Essaye encore !"
                    }
                };
                $scope.$emit('popups', popups);
            }
        }

        /*
         * Est déclenchée lorsque des élements sont lachés au dessus des trous
         */
        $scope.onDrop = function() {
            $timeout(function() { // sinon l'animation de déplacement se fait après l'affichage du message
                var isRightAnswer = checkSolution($scope.holes);
                if (isRightAnswer) {
                    endGame();
                } else {
                    tryAgain();
                }
            }, 200);
        };
    });
