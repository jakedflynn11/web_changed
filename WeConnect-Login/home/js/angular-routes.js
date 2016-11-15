// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html'
               
            })

            // route for the monthly page
            .when('/monthly', {
                templateUrl : 'pages/plan.html',
                controller  : 'monthlyController'
            })

            // route for the yearly page
            .when('/yearly', {
                templateUrl : 'pages/plan.html',
                controller  : 'yearlyController'
            })
        
            .when('/years', {
                templateUrl : 'pages/plan.html',
                controller  : 'yearsController'
            })
        
            .when('/lifetime', {
                templateUrl : 'pages/plan.html',
                controller  : 'lifetimeController'
            });
    });
 myApp.controller('mainController', function($scope) {
     
    });
    // create the controller and inject Angular's $scope
    myApp.controller('monthlyController', function($scope) {
        // create a message to display in our view
        $scope.plan = 'monthly',
        $scope.price = '$9.99',
        $scope.total = '9.99/mo';
    });

    myApp.controller('yearlyController', function($scope) {
        $scope.plan = 'annual',
        $scope.price = '$7.99',
        $scope.total = '$95.88';
    });

    myApp.controller('yearsController', function($scope) {
        $scope.plan = 'two years',
        $scope.price = '$6.99',
        $scope.total = '$267.76';
    });

    myApp.controller('lifetimeController', function($scope) {
        $scope.plan = 'lifetime',
        $scope.price = '$1499.99',
        $scope.total = '$1499.99';
    });