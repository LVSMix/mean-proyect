// /public/server/BookListController.js

//Our Controller reads both values from the window object and set them to the scope
angular.module('app').controller('BookListController', function($scope, $window) {
    $scope.title = $window.title;
    $scope.books = $window.books;
});