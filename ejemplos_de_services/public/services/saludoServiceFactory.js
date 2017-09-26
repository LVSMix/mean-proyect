var saludoServiceFactory = angular.module('saludoServiceFactory', []);

saludoServiceFactory.factory('saludoServiceFactory', [function() {

    var saludo = function() {
        return "HOLA";
    }

    return saludo;
}]);