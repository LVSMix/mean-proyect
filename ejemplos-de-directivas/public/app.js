// Creación del módulo
var angularApp = angular.module('angularApp', ['ngRoute', 'clienteController', 'ciudadesController', 'homeController', 'frutasController',
    'clienteService', 'ciudadesService', 'miCliente', 'miClienteDos', 'miClienteTres'
]);


//Configuración de las rutas
angularApp.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider.when('/home', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        }).when('/frutas', {
            templateUrl: 'pages/frutas.html',
            controller: 'frutasController'
        }).when('/altaCliente', {
            templateUrl: 'pages/clientes/altaCliente.html',
            controller: 'clienteController'
        }).when('/clientes', {
            templateUrl: 'pages/clientes.html',
            controller: 'clienteController'
        }).when('/ciudades', {
            templateUrl: 'pages/ciudades.html',
            controller: 'ciudadesController'
        })
        .otherwise({
            redirectTo: '/home'
        });


});