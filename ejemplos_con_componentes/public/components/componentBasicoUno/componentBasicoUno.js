var componentBasicoUno = angular.module('componentBasicoUno', []);

componentBasicoUno.component('componentBasicoUno', {
    template: [
        '<div class="miclase">',
        '<span>Esto es algo de HTML en el componente</span> ',
        '<b>Angular Rules!</b>',
        '</div>'
    ].join('')
});