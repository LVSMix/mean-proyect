var frutasComponent = angular.module('frutasComponent', []);

frutasComponent.component('frutasComponent', {
    templateUrl: "../components/frutasTableComponent/frutasTable.html",
    controller: function($scope, frutasService, NgTableParams) {
        var vm = this;

        frutasService.getFrutas().then(function(data) {
            vm.frutas = data.data;
            vm.tableFrutas = new NgTableParams({
                page: 1,
                count: 15,
                sorting: { nombre: "desc" }
            }, {
                counts: [],
                paginationMaxBlocks: 15,
                paginationMinBlocks: 2,
                dataset: vm.frutas
            });
        });
    },
    controllerAs: 'vm'
});