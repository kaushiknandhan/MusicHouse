/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function(){
    'use strict';
    angular.module('musichouse',['ui.bootstrap','ngRoute','ngAnimate','ngTouch','ngMessages','ngStorage','ui-notification'])
        .config(moduleConfig);

    function moduleConfig($routeProvider,$locationProvider,NotificationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/home',{
                templateUrl:'app/view/home.tmpl.html',
                controller:'homeController',
                controllerAs:'homeVm'
            })
            .when('/admin/home',{
                templateUrl:'app/view/adminhome.tmpl.html',
                controller:'homeController',
                controllerAs:'homeVm'
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
            .when('/admin/products',{
                templateUrl:'app/view/adminProducts.tmpl.html',
                controller:'productController',
                controllerAs:'productVm'
            })
            .when('/products/:productId',{
                templateUrl:'app/view/productInfo.tmpl.html',
                controller:'productInfoController',
                controllerAs:'productInfoVm'
            })
            .when('/admin/products/:productId',{
                templateUrl:'app/view/adminProductEdit.tmpl.html',
                controller:'productInfoController',
                controllerAs:'productInfoVm'
            })
            .when('/products/category/:type',{
                templateUrl:'app/view/productCaterory.tmpl.html',
                controller:'productCategoryController',
                controllerAs:'productCategoryVm'
            })
            .when('/admin/products/category/:type',{
                templateUrl:'app/view/adminproductCaterory.tmpl.html',
                controller:'productCategoryController',
                controllerAs:'productCategoryVm'
            })
            .when('/cart',{
                templateUrl:'app/view/cartItems.tmpl.html',
                controller:'cartItemController',
                controllerAs:'cartItemVm'
            })
            .when('/customerdetails',{
                templateUrl:'app/view/customerdetails.tmpl.html',
                controller:'customerDetailController',
                controllerAs:'customerDetailVm'
            })
            .when('/billingsummary',{
                templateUrl:'app/view/billing.tmpl.html',
                controller:'billingController',
                controllerAs:'billingVm'
            })
            .when('/cancelorder',{
                templateUrl:'app/view/cancelorder.tmpl.html',
            })
            .when('/successorder',{
                templateUrl:'app/view/ordersuccess.tmpl.html',
            })
            .when('/about',{
                templateUrl:'app/view/about.tmpl.html',
                controller:'aboutController',
                controllerAs:'aboutVm'
            })
            .when('/admin/about',{
                templateUrl:'app/view/adminabout.tmpl.html',
                controller:'aboutController',
                controllerAs:'aboutVm'
            })
            .when('/admin/add',{
                templateUrl:'app/view/addProduct.tmpl.html',
                controller:'addController',
                controllerAs:'addVm'
            })
            .when('/admin/checkorders',{
                templateUrl:'app/view/checkorders.tmpl.html',
                controller:'checkordersController',
                controllerAs:'checkordersVm'
            })
            .otherwise({
                redirectTo:'/home'
            })
        NotificationProvider.setOptions({
            delay: 2000,
            startTop: 40,
            startRight: 20,
            verticalSpacing: 40,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top',
            closeOnClick: true

        });
    }
})();