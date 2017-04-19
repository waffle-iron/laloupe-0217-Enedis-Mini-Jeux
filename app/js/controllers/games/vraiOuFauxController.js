//Controller du jeux Vrai ou Faux du livret
angular.module('app')
    .controller('VraiOuFauxController', function($scope) {
        $scope.cacheBouton = false;
        $scope.question1 = 'Aucun risque de s\'électrocuter si l\'on utilise un sèche-cheveux avec les mains mouillées';
        $scope.question2 = 'Si je touche un lave-linge qui grésille ou qui picote le bout de mes doitgs, je préviens tout de suite mes parents';
        $scope.question3 = 'Il n\'est pas dangereux de se servir d\'un appareil électrique dans l\'eau';
        $scope.question4 = 'Pour faire sécher sa serviette plus vite, on peut la poser sur le radiateur électrique, meme si ce n\'est pas un sèche serviette';
        $scope.question5 = 'Je ne change jamais une ampoule les pieds mouillées';
        $scope.reponse = [{
                question: $scope.question1,
                reponse: false
            },
            {
                question: $scope.question2,
                reponse: true
            },
            {
                question: $scope.question3,
                reponse: false
            },
            {
                question: $scope.question4,
                reponse: false
            },
            {
                question: $scope.question5,
                reponse: true
            }
        ];
        $scope.currentQuestion = $scope.reponse[0].question;
        $scope.vrai = function() {
            vraiOuFaux(true);
        };
        $scope.faux = function() {
            vraiOuFaux(false);
        };
        var compteur = 0;

        function vraiOuFaux(reponseUtilisateur) {
            if ($scope.reponse[compteur].reponse === reponseUtilisateur) {
                if (compteur !== 4) {
                    compteur++;
                    $scope.currentQuestion = $scope.reponse[compteur].question;
                } else {
                    $scope.cacheBouton = true;
                    console.log("Bravo tu as fini le jeux");
                }
            } else {
                console.log("Mauvaise Réponse");
            }
        }
    });
