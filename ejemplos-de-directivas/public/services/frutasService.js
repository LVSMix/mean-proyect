var frutasService = angular.module('frutasService', []);

frutasService.service('frutasService', ['$http', function($http) {
    this.frutasMock = [{ 'nombre': 'banana', 'precio': 18 }, { 'nombre': 'manzana', 'precio': 20 }]


    this.getFrutas = function() {
        return this.frutasMock;

        //return $http.get('/frutas');
    }

}]);