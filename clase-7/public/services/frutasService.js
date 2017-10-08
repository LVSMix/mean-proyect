var frutasService = angular.module('frutasService', []);

frutasService.service('frutasService', ['$http', function($http) {
    this.frutasMock = [{ 'nombre': 'banana', 'precio': 18 }, { 'nombre': 'manzana', 'precio': 20 }]


    this.getFrutas = function() {
        return $http.get('http://www.mocky.io/v2/59cd92b6110000cf01cccb9b');
    }

}]);