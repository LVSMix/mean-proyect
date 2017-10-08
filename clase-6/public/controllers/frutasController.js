var frutasController = angular.module('frutasController', []);

frutasController.controller('frutasController', ['$scope', 'frutasService', function($scope, frutasService) {

    $scope.frutas = "";

    $scope.init = function() {
        $scope.frutas = $scope.all();
    }

    $scope.all = function() {
        return frutasService.getFrutas().then(function(data) {
            $scope.frutas = data.data;
        });
    }

}]);