// public/client/app.js
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/client/bookList.html',
            controller: 'BookListController'
        });
});