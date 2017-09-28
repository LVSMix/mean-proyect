// Creación del módulo
var angularApp = angular.module('angularApp', ['ngRoute', 'clienteController', 'ciudadesController', 'clienteService', 'ciudadesService']);


//Configuración de las rutas
angularApp.config(function($routeProvider) {

    $routeProvider.when('/clientes', {
            templateUrl: 'pages/clientes.html',
            controller: 'clienteController'
        }).when('/ciudades', {
            templateUrl: 'pages/ciudades.html',
            controller: 'ciudadesController'
        })
        .otherwise({
            redirectTo: '/ciudades'
        });

});