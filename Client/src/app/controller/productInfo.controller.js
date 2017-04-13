/**
 * Created by kaushik nandhan on 4/5/2017.
 */
(function(){
        'use strict';
        angular.module('musichouse')
            .controller('productInfoController',productInfoController);

        productInfoController.$inject = ['productService','$routeParams','cartItemService','$location','Notification'];
        function productInfoController(productService,$routeParams,cartItemService,$location,Notification) {
            var productInfoVm= this;
            productInfoVm.product = {};
            productInfoVm.spinner = true;
            productInfoVm.navBarProduct = "active";
            productInfoVm.isAdded = false;
            productInfoVm.addProduct = addProduct;
            productInfoVm.editProduct = editProduct;
            init();

            function init(){
                productService.getProductsInfo($routeParams.productId)
                    .then(function (product) {
                        productInfoVm.product = product;
                    },function (error) {
                        console.log('error from server'+error);
                        // redirect to error page
                        $location.path('/products');
                    }).finally(function () {
                        productInfoVm.spinner = false;
                });
            }

            function addProduct() {
                console.log('product info controller: '+productInfoVm.product);
                productInfoVm.isAdded = cartItemService.addCartItems(productInfoVm.product);
                // A notification showing the products successfully added in the cart
                if(productInfoVm.isAdded === true ){
                    Notification.success('Product added to your cart');
                    console.log('The product is added in the cart');
                }else if(productInfoVm.isAdded === "exists"){
                    Notification.warning("The Product already exists in the CART!!!");
                }
                else{
                    Notification.error('OOPSS!!! Something went wrong hold on and try again in some time');
                    console.log('The product is not added in the cart');
                }
            }

            function editProduct() {
                productService.editProduct(productInfoVm.product,productInfoVm.product.productId)
                    .then(function (updatedProduct) {
                        productInfoVm.product = updatedProduct;
                        Notification.success("Product "+productInfoVm.product.productName+" updated successfully");
                        $location.path("/admin/products");
                    },function (error) {
                        console.log('Error from Product Info controller: '+error);
                    });
            }

        }
    }
)();