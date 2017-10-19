var datepicker = angular.module('datepicker', []);

datepicker.component('datepicker', {
    templateUrl: "/components/datepicker/datepicker.html",
    controller: function() {
        var vm = this;
        vm.myDate = new Date();
        vm.isOpen = false;
    },
    controllerAs: 'vm'
});