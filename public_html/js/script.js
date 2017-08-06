/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', []);

app.controller('EnableDisableController', ['$scope', function EnableDisableController(scope) {

        scope.enableDisableButton = false;
    }]);

app.controller('ShowButtonController', ['$scope', function ShowButtonController(scope) {

        scope.show = false;
        scope.buttonName = "Click Me!";
    }]);

app.controller('ButtonClickController', ['$scope', function ButtonClickController(scope) {

        scope.number = 0;
        scope.increment = function () {
            scope.number = scope.number + 1;
        };
        scope.decrement = function () {
            scope.number = scope.number - 1;
        };
    }]);
