// Creación del módulo
var angularApp = angular.module('angularApp', ['ngRoute', 'clienteController', 'ciudadesController', 'homeController', 'frutasController', 'clienteService',
    'ciudadesService', 'frutasService', 'componentBasicoUno', 'componentesController', 'componentBasicoDos', 'componentBasicoTres', 'frutasComponent'
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
        }).when('/altaCliente', {
            templateUrl: 'pages/clientes/altaCliente.html',
            controller: 'clienteController'
        }).when('/frutas', {
            templateUrl: 'pages/frutas-component.html',
            controller: 'frutasController'
        }).when('/clientes', {
            templateUrl: 'pages/clientes.html',
            controller: 'clienteController'
        }).when('/ciudades', {
            templateUrl: 'pages/ciudades.html',
            controller: 'ciudadesController'
        })
        .when('/componentes', {
            templateUrl: 'pages/componentes.html',
            controller: 'componentesController'
        })
        .otherwise({
            redirectTo: '/home'
        });

});