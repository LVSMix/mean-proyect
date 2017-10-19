var clienteController = angular.module('clienteController', []);

clienteController.controller('clienteController', ['$scope', '$http', '$location', 'clienteService',
    function($scope, $http, $location, clienteService) {
        $scope.nombre = "";
        $scope.saludo = "";
        $scope.cliente = { nombre: "", apellido: "" };
        $scope.selectedClienteId = "";

        this.myDate = new Date();
        this.isOpen = false;

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

        $scope.altaCliente = function() {
            clienteService.create($scope.cliente).then(function(data) {
                $scope.cliente = data.data;
                $scope.go('/clientes');
            });
        }

        $scope.selectedCliente = function(obj) {
            if (obj.checkState == true) {
                $scope.selectedClienteId = obj.cliente._id;
            } else {
                $scope.selectedClienteId = "";
            }
        }

        $scope.eliminarCliente = function() {
            if ($scope.selectedClienteId != "") {
                clienteService.remove({ id: $scope.selectedClienteId }).then(function(data) {
                    $scope.all();
                });
            } else {
                alert("No se ha seleccionado el cliente");
            }
        }

        $scope.saludo = function() {
            //$scope.nombre = "PEPE";
            $scope.saludoText = "HOLA " + $scope.nombre;
        }

    }
]);