//directives
var miClienteDos = angular.module('miClienteDos', []);

miClienteDos.directive('miClienteDos', function() {
    return {
        restrict: 'AE',
        scope: {
            clienteDinamico: '=cliente'
        },
        templateUrl: '/directives/template.html'
    };
});