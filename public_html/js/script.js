/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function (routeProvider) {

        routeProvider.when('/', {
            templateUrl: 'home.html'
        });

        routeProvider.when('/ajax-request', {
            templateUrl: 'ajax-request.html'
        });

        routeProvider.otherwise({
            redirectTo: '/'
        });

    }]);

app.controller('HomeController', ['$scope', function HomeController(scope) {
        scope.message = 'This is home page';
    }]);

app.controller('AJAXRequest', ['$scope', '$http', function AJAXRequest(scope, http) {

        scope.posts = [];

        scope.load = function () {

            scope.posts.fill(null);
            var url = 'https://jsonplaceholder.typicode.com/photos';

            http.get(url).then(function (response) {
                scope.posts = response.data;
            });
        };
    }]);
