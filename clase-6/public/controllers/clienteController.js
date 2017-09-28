var clienteController = angular.module('clienteController', []);

clienteController.controller('clienteController', ['$scope', '$http', 'clienteService',
    function($scope, $http, clienteService) {
        $scope.nombre = "";
        $scope.saludo = "";

        $scope.init = function() {
            $scope.all();
        };

        $scope.all = function() {
            clienteService.getClientes().then(function(data) {
                $scope.clientes = data.data;
            });
        }

        $scope.saludo = function() {
            //$scope.nombre = "PEPE";
            $scope.saludoText = "HOLA " + $scope.nombre;
        }

    }
]);