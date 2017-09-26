var saludoService = angular.module('saludoService', []);

saludoService.service('saludoService', [function() {

    this.saludo = function() {
        return "HOLA";
    }
}]);