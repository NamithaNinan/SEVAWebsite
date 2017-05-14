'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'templates/login.html'
            })
            .state('index', {
                url: '/home',
                templateUrl: 'templates/dashboard.html'
            })
            .state('users', {
                url: '/users?username',
                templateUrl: 'templates/tables.html'
            })
        .state('volunteers', {
                url: '/volunteers?volname',
                templateUrl: 'templates/tables2.html'
            });
    }
]);