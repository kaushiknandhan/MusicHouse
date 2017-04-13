/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function() {
    'use strict';
    angular.module('musichouse')
        .controller('billingController',billingController);

    billingController.$inject = ['$sessionStorage','billingService','cartItemService','$location','Notification','productService','customerDetailsService'];
    function billingController($sessionStorage,billingService,cartItemService,$location,Notification,productService,customerDetailsService) {
        var billingVm = this;
        billingVm.billingDate = "";
        billingVm.customerInfo = {};
        billingVm.finalCartItem = {};
        billingVm.cartProduct = {};
        billingVm.billSummary = {};
        billingVm.cartItems = [];
        billingVm.cartItems2 = [];
        billingVm.totalPrice = 0;
        billingVm.totalCartPrice = 0;
        billingVm.finalCartList = [];
        billingVm.payType = "cash";
     //   billingVm.getTotalPrice = getTotalPrice;
        billingVm.submitOrder = submitOrder;

        init();

            function init() {
                console.log('init method in billing controller');
                billingVm.cartItems = cartItemService.getCartItems();
                billingVm.customerInfo = customerDetailsService.getCustomerInfo();
                 if(billingVm.cartItems === undefined || billingVm.cartItems === [] || billingVm.customerInfo === undefined || billingVm.customerInfo === null  ){
                     Notification.error('Your CART is EMPTY !!!! Please fill the Cart');
                     $location.path('/products');
                }
                else {
                     billingVm.billingDate = (new Date()).getTime();
                     billingVm.cartItems2 = [];
                     for (var i = 0; i < billingVm.cartItems.length; i++) {
                         var quantity = billingVm.cartItems[i].productQuantity;
                         productService.getProductsInfo(billingVm.cartItems[i].productId)
                             .then(function (productInfo) {
                                 billingVm.cartProduct = productInfo;
                                 console.log(quantity);
                                 billingVm.cartProduct.productQuantity = cartItemService.getProductQuantity(billingVm.cartProduct.productId);
                                 billingVm.cartProduct.totalPrice = cartItemService.getTotalPrice(billingVm.cartProduct.productQuantity, billingVm.cartProduct.productPrice);
                                 billingVm.cartItems2.push(billingVm.cartProduct);
                                 billingVm.totalCartPrice = cartItemService.getTotalCartPrice(billingVm.cartItems2);
                                 billingVm.cartProduct = {};
                             }, function (error) {
                                 console.log('Some error from product controller' + error);
                             });
                     }

                 }
            }

        function submitOrder() {
            console.log('billing cat items');
            console.dir(billingVm.cartItems2);
            console.dir( billingVm.finalCartList);
                // init();
            console.dir(billingVm.cartItems2);
            console.log(billingVm.cartItems2.length);

            for(var i = 0 ; i < billingVm.cartItems2.length ; i++){
                console.log('entered for loop');
                billingVm.finalCartItem.totalPrice = billingVm.cartItems2[i].totalPrice;
                billingVm.finalCartItem.time = (new Date()).getTime();
                billingVm.finalCartItem.quantity =  billingVm.cartItems2[i].productQuantity;
                billingVm.finalCartItem.product =  billingVm.cartItems2[i];
                console.dir(billingVm.finalCartItem);
                billingVm.finalCartList.push(billingVm.finalCartItem);
                billingVm.finalCartItem = {};
            }

            console.log('final cart list');
            console.dir( billingVm.finalCartList);
            billingVm.billSummary.cartItem = billingVm.finalCartList;
            billingVm.billSummary.customer = billingVm.customerInfo;
            billingVm.billSummary.orderedOn = (new Date()).getTime();
            billingVm.billSummary.grandTotal = billingVm.totalCartPrice;
            billingVm.billSummary.billingType =  billingVm.payType;

            billingService.submitOrder(billingVm.billSummary)
                .then(function (billSummary) {
                    console.log('entered in promis submit order');
                    $sessionStorage.$reset();
                    cartItemService.removeCart();
                    cartItemService.invokeInit();
                    billingVm.finalCartList = billSummary;
                },function (error) {
                    console.log('error at billing controller'+error);
                });
        }
    }
})();
