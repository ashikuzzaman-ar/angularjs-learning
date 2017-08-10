/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', []);

app.controller('CustomModelTest', ['$scope', function CustomModelTest(scope) {

        scope.users = [];
        scope.user = {name: 'Ashik', age: 26, occupation: 'Developer'};
        scope.saveActivation = false;
        scope.updateActivation = true;

        scope.save = function () {

            scope.users.push({name: scope.user.name, age: scope.user.age, occupation: scope.user.occupation});
            scope.user = null;
        };
    }]);
