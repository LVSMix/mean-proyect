// public/server/app.js
// defines a catch all route which will get a partial from /server/bookList (There is no .html)
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '/server/bookList',
            controller: 'BookListController'
        });
});