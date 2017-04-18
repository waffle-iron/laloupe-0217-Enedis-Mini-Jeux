angular.module('app')
    .controller('BoucheTrouController', function($scope) {
        /*
        * La solution (les mots sont dans le bonne ordre)
        */
        var WORDS = [
            'débrancher',
            'électrique',
            'nettoyer',
            'blesser'
        ];
        Object.freeze(WORDS); // rend constant WORDS


        $scope.words = WORDS.slice(0); // copie l'array
        $scope.holes = WORDS.map( function() { return ""; }); // pour que words et holes soient bien de la même longueure

        $scope.onDrop = function() {
            console.log(checkSolution($scope.holes));
            console.log('WORDS', WORDS, 'solution', $scope.holes);
        };

        function checkSolution(proposedSolution) {
            return proposedSolution.length === WORDS.length && proposedSolution.every( function(word, index) {
                return word === WORDS[index];
            });
        }
    });
