var clienteService = angular.module('clienteService', []);

clienteService.service('clienteService', ['$http', function($http) {

    this.getClientes = function() {
        return $http.get('/list');
    }

    this.create = function(cliente) {
        return $http.post('/create', cliente);
    }

    this.remove = function(id) {
        return $http.post('/remove', id);
    }
}]);