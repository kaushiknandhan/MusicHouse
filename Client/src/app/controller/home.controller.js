/**
 * Created by kaushik nandhan on 4/8/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('homeController',homeController);

    homeController.$inject = [];
    function homeController() {
        var homeVm = this;
        homeVm.navBarHome = "active";
    }
})();