var clienteService = angular.module('clienteService', []);

clienteService.service('clienteService', ['$http', function($http) {

    this.getClientes = function() {
        return $http.get('/list');
    }
}]);