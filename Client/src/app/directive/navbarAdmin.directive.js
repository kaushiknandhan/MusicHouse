/**
 * Created by kaushik nandhan on 4/9/2017.
 */

(function() {
    'use strict';
    angular.module('musichouse')
        .directive('navbarAdmin',navbarAdmin);

    navbarAdmin.$inject = [];
    function navbarAdmin() {
        var direct = {
            templateUrl:"app/view/nav-bar-admin.tmpl.html",
            controller:"navBarAdminController",
            controllerAs:"navbarAdminVm"
        }
        return direct;
    }


})();