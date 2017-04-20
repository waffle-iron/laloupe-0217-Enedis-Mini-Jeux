angular.module('app')
    .directive('speechBubble', function() {
        return {
            restrict: 'E',
            templateUrl: 'anon/speech-bubble.html',
            scope: {
                character: "=character",
                flip: "=flip",
                content: "=content"
            }
        };
    });
