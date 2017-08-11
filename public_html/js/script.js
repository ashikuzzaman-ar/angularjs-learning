/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', []);

app.controller('CustomModelTest', ['$scope', '$http', function CustomModelTest(scope, http) {

        scope.posts = [];

        scope.load = function () {

            scope.posts.fill(null);
//            var url = 'https://jsonplaceholder.typicode.com/posts';
            var url = 'https://jsonplaceholder.typicode.com/photos';

            http.get(url).then(function (response) {
                scope.posts = response.data;
            });
        };
    }]);
