/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('app', []);

app.controller('controllerTest', function controllerTest($scope) {

    $scope.students = [
        {'name': 'Mohammad Ashikuzzaman', 'tag': 'Developer'},
        {'name': 'Ariful Islam Badal', 'tag': 'Navy Officer'},
        {'name': 'Srijan Mazumder Michael', 'tag': 'Planner'}
    ];
});
