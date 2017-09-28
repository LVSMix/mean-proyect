//directives
var miClienteTres = angular.module('miClienteTres', []);

miClienteTres.directive('miClienteTres', function() {
    return {
        restrict: 'A',
        template: "Hola Mundo !!!"
    };
});