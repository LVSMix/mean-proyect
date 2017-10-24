var clienteController = angular.module('clienteController', []);

clienteController.controller('clienteController', ['$scope', '$http', function($scope, $http) {

    $scope.init = function() {
        $scope.all();
    };

    $scope.all = function() {
        $http.get('/api/list').success(function(data) {
            $scope.clientes = data;
        }).error(function(data) {
            console.log('Error:' + data);
        })
    }

}]);