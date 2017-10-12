var componentBasicoTres = angular.module('componentBasicoTres', []);

componentBasicoTres.component('componentBasicoTres', {
    bindings: {},
    controller: function() {
        var vm = this;
        vm.numClics = 0;
        vm.incrementaClic = function() {
            vm.numClics++;
        }
    },
    controllerAs: 'vm',
    templateUrl: "../components/componentBasicoTres/page.html"
});