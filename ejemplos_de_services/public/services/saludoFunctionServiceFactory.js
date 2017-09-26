var saludoFunctionServiceFactory = angular.module('saludoFunctionServiceFactory', []);

saludoFunctionServiceFactory.factory('saludoFunctionServiceFactory', [function() {

    var saludo = "HOLA";

    return {
        getSaludo: function() {
            return saludo;
        }
    };
}]);