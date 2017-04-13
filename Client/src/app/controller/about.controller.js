/**
 * Created by kaushik nandhan on 4/8/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('aboutController',aboutController);

    aboutController.$inject = [];
    function aboutController() {
        var aboutVm = this;
        aboutVm.navBarAbout = "active";
    }
})();