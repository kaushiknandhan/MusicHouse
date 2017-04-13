/**
 * Created by kaushik nandhan on 3/19/2017.
 */
(function(){
    'use strict';
        angular.module('musichouse')
            .controller('productController',productController);

        productController.$inject = ['productService'];
        function productController(productService) {
            var productVm= this;
            productVm.spinner = true;
            productVm.navBarProduct = "active";
            productVm.products = [];
            init();

            function init(){
                productService.getProducts()
                    .then(function (products) {
                        productVm.products = products;
                    },function (error) {
                        console.log('error from server'+error);
                    }).finally(function() {
                    // called no matter success or failure
                    productVm.spinner = false;
                });
            }

        }
    }
)();