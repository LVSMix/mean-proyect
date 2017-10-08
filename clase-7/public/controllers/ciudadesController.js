var ciudadesController = angular.module('ciudadesController', []);

ciudadesController.controller('ciudadesController', ['$scope', '$http', 'ciudadesService',
    function($scope, $http, ciudadesService) {
        $scope.ciudades = "";
        $scope.init = function() {
            $scope.getCiudades();
        };


        $scope.getCiudades = function() {
            ciudadesService.getCiudades().then(function(data) {
                $scope.ciudades = data.data.ciudades;
            });
        }
    }
]);