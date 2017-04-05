/**
 * Created by kaushik nandhan on 3/28/2017.
 */

(function() {
    'use strict';
    angular.module('musichouse')
        .directive('carousal',carousal);

    carousal.$inject = [];
    function carousal() {
        var direct = {
            templateUrl:"app/view/carousel.tmpl.html",
            controller:"carouselController",
            controllerAs:"carouselVm"
        }
        return direct;
    }


})();