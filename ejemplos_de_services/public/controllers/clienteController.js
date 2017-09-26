var clienteController = angular.module('clienteController', []);

clienteController.controller('clienteController', ['$scope', '$http', 'version', 'servers',
    'versionValue', 'randomize', 'saludoService', 'saludoServiceFactory', 'saludoFunctionServiceFactory',
    function($scope, $http, version, servers, versionValue, randomize, saludoService, saludoServiceFactory, saludoFunctionServiceFactory) {
        $scope.nombre = "";
        $scope.saludo = "";

        $scope.init = function() {
            $scope.all();
            alert("version constants =" + version);
            alert("version constants 2 =" + servers.DEVELOPMENT);
            alert("version value = " + versionValue);
            alert("version value function = " + randomize());

            alert("saludoService tipo service = " + saludoService.saludo());
            alert("saludoService tipo factory = " + saludoServiceFactory());
            alert("saludoService tipo factory tipo Function = " + saludoFunctionServiceFactory.getSaludo());
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

    }
]);