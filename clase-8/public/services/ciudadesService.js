var ciudadesService = angular.module('ciudadesService', []);

ciudadesService.service('ciudadesService', ['$http', function($http) {

    this.getCiudades = function() {
        return $http.get('http://www.mocky.io/v2/59caec052d0000b804806972');
    }
}]);