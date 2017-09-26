// Creación del módulo
var angularApp = angular.module('angularApp', ['ngRoute', 'clienteController', 'saludoService', 'saludoServiceFactory', 'saludoFunctionServiceFactory']);

//Servicios Constants
angularApp.constant('version', '123456789');

//O un array de las mismas
angularApp.constant('servers', { DEVELOPMENT: "http://localhost:8080/app", PRODUCTION: "http://myDomain.com/app" });

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

angularApp.value("versionValue", "123345");

angularApp.value("randomize", function() {
    return Math.floor(Math.random() * 10000);
})