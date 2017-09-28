var clienteController = angular.module('clienteController', []);

clienteController.controller('clienteController', ['$scope', '$http', '$location', 'clienteService',
    function($scope, $http, $location, clienteService) {
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

        $scope.go = function(path) {
            $location.path(path);
        }

        $scope.saludo = function() {
            //$scope.nombre = "PEPE";
            $scope.saludoText = "HOLA " + $scope.nombre;
        }

        $scope.cliente = {
            nombre: 'Jhon',
            direccion: 'Av. Jose pardo 481'
        };

        $scope.cliente1 = { nombre: 'Percy', direccion: 'Calle Los Manzanos' };
        $scope.cliente2 = { nombre: 'Gerardo', direccion: 'Calle Dueñas' };

    }
]);