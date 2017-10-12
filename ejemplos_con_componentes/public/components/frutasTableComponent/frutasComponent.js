var frutasComponent = angular.module('frutasComponent', []);

frutasComponent.component('frutasComponent', {
    templateUrl: "../components/frutasTableComponent/frutasTable.html",
    controller: function($scope, frutasService) {
        debugger;
        var vm = this;

        frutasService.getFrutas().then(function(data) {
            vm.frutas = data.data;
        });
    },
    controllerAs: 'vm'
});