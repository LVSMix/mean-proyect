var miClienteCuatro = angular.module('miClienteCuatro', []);

miClienteCuatro.directive('jqSlider', [function() {
    return {
        restrict: 'A',
        scope: {
            'model': '='
        },
        link: function(scope, elem, attrs) {
            $(elem).slider({
                value: +scope.model,
                slide: function(event, ui) {
                    $scope.apply(function() {
                        scope.model = ui.value;
                    });
                }
            });
        }
    }
}]);