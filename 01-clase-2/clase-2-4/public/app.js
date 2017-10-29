// Creación del módulo
var angularApp = angular.module('angularApp', ['ngRoute', 'clienteController']);


//Configuración de las rutas
angularApp.config(function($routeProvider) {

    $routeProvider.when('/clientes', {
            templateUrl: 'pages/clientes.html',
            controller: 'clienteController'
        })
        .otherwise({
            redirectTo: '/clientes'
        });

});