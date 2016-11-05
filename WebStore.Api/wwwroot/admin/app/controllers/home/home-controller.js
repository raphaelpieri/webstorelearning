(function () {
    'use strict';
    angular.module('mwa').controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];

    function HomeCtrl() {
        var vm = this;

        vm.activate = activate;
        
        activate();

        function activate() {

        }
    };
})();