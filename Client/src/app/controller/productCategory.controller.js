/**
 * Created by kaushik nandhan on 4/9/2017.
 */
(function () {
    'use strict';

    angular.module('musichouse')
        .controller('productCategoryController',productCategoryController);

    productCategoryController.$inject = ['productService','$routeParams','Notification'];
    function productCategoryController(productService,$routeParams,Notification) {
        var productCategoryVm = this;
        productCategoryVm.spinner = true;
        productCategoryVm.isProductPresent = true;
        productCategoryVm.products = [];
         getProducts();


        function getProducts() {
            productService.getProductsByType($routeParams.type)
                .then(function (products) {

                    productCategoryVm.products = products;
                    if(products.length === 0){
                        productCategoryVm.isProductPresent = false;
                        Notification.warning("No products present with this category");
                    }
                },function (error) {
                    console.log('error from productCatergory controller: '+error);
                }).finally(function () {
                productCategoryVm.spinner = false;
            });
        }
    }

})();