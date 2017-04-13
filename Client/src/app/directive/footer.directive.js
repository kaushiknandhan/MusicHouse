/**
 * Created by kaushik nandhan on 4/7/2017.
 */

(function() {
    'use strict';
    angular.module('musichouse')
        .directive('foot',foot);

    foot.$inject = [];
    function foot() {
        var direct = {
            templateUrl:"app/view/foot.tmpl.html"
        }
        return direct;
    }
})();