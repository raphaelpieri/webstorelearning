(function() {
    'use strict';

    angular.module('mwa').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/home/index.html'
            })
            .when('/cart', {
                controller: 'CartCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/store/cart.html'
            })
            .otherwise({redirectTo: '/'});
    });

})();