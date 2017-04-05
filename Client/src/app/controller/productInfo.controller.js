/**
 * Created by kaushik nandhan on 4/5/2017.
 */
(function(){
        'use strict';
        angular.module('musichouse')
            .controller('productInfoController',productInfoController);

        productInfoController.$inject = ['productService','$routeParams','cartItemService','$location'];
        function productInfoController(productService,$routeParams,cartItemService,$location) {
            var productInfoVm= this;
            productInfoVm.product = {};
            productInfoVm.isAdded = false;
            productInfoVm.addProduct = addProduct;

            init();

            function init(){
                productService.getProductsInfo($routeParams.productId)
                    .then(function (product) {
                        productInfoVm.product = product;
                    },function (error) {
                        console.log('error from server'+error);
                        // redirect to error page
                        $location.path('#/home');
                    });
            }

            function addProduct() {
                productInfoVm.isAdded = cartItemService.addCartItems(productInfoVm.product);
                // A notification showing the products successfully added in the cart
                if(productInfoVm.isAdded){
                    console.log('The product is added in the cart');
                }else{
                    console.log('The product is not added in the cart');
                }
            }
        }
    }
)();