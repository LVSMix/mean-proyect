var clienteController = angular.module('clienteController', []);

clienteController.controller('clienteController', ['$scope', '$http', function($scope, $http) {
    $scope.nombre = "";
    $scope.saludo = "";

    $scope.init = function() {
        $scope.all();
    };

    $scope.all = function() {
        $http.get('/list').then(function(data) {
            $scope.clientes = data.data;
        });
    }

    $scope.saludo = function() {
        $scope.nombre = "PEPE";
        $scope.saludoText = "HOLA " + $scope.nombre;
    }

}]);