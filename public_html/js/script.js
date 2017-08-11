/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', ['ngRoute']);

app.run(['$rootScope', function (rootScope) {

        rootScope.posts = [];
    }]);

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

app.controller('AJAXRequest', ['$scope', '$http', '$rootScope', function AJAXRequest(scope, http, rootScope) {

        scope.posts = rootScope.posts;

        if (scope.posts.length === 0) {

            scope.load = function () {

                var url = 'https://jsonplaceholder.typicode.com/photos';
                http.get(url).then(function (response) {
                    scope.posts = response.data;
                    rootScope.posts = scope.posts;
                });
            };
        }
    }]);
