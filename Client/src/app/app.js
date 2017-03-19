/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function(){
    'use strict';
    angular.module('musichouse',['ngRoute'])
        .config(moduleConfig);
    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/home',{
                templateUrl:'app/view/home.tmpl.html'
            })
            .otherwise({
                redirectTo:'/home'
            });
    }
})();