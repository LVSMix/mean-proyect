//directives
var miCliente = angular.module('miCliente', []);

miCliente.directive('miCliente', function() {
    return {
        template: 'Nombre: {{cliente.nombre}} Dirección: {{cliente.direccion}}'
    };
});