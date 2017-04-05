/**
 * Created by kaushik nandhan on 3/28/2017.
 */

(function() {
'use strict';
    angular.module('musichouse')
        .directive('navBar',navBar);

    navBar.$inject = [];
    function navBar() {
        var direct = {
            templateUrl:"app/view/nav-bar.tmpl.html",
            controller:"navBarController",
            controllerAs:"navbarVm"

        }
        return direct;
    }


})();