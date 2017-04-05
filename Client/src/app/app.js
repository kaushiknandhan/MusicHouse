/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function(){
    'use strict';
    angular.module('musichouse',['ui.bootstrap','ngRoute','ngAnimate','ngTouch','ngMessages'])
        .config(moduleConfig);

    function moduleConfig($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/home',{
                templateUrl:'app/view/home.tmpl.html'
            })
            .when('/signup',{
                templateUrl:'app/view/signup.tmpl.html',
                controller:'userController',
                controllerAs:'userVm'
            })
            .when('/login',{
                templateUrl:'app/view/login.tmpl.html',
                controller:'userController',
                controllerAs:'userVm'
            })
            .when('/products',{
                templateUrl:'app/view/products.tmpl.html',
                controller:'productController',
                controllerAs:'productVm'
            })
            .when('/products/:productId',{
                templateUrl:'app/view/productInfo.tmpl.html',
                controller:'productInfoController',
                controllerAs:'productInfoVm'
            })
            .when('/cart',{
                templateUrl:'app/view/cartItems.tmpl.html',
                controller:'cartItemController',
                controllerAs:'cartItemVm'
            })
            .otherwise({
                redirectTo:'/home'
            })
    }
})();