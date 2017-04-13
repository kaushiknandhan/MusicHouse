/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('cartItemController',cartItemController);

    cartItemController.$inject = ['cartItemService','productService','Notification','$location'];
    function cartItemController(cartItemService,productService,Notification,$location){
        var cartItemVm = this;
        cartItemVm.cartProduct = {};
        cartItemVm.cartItems = [];
        cartItemVm.cartItems2 = [];
        cartItemVm.spinner = true;
        cartItemVm.navBarCart = "active";
        cartItemVm.totalCartPrice = 0;
        cartItemVm.numberOfItems = 0;
        cartItemVm.toRemove = false;
        cartItemVm.disableButtons = true;
        cartItemVm.showLayout = false;
        cartItemVm.removeItem = removeItem;
        cartItemVm.updateItem = updateItem;
        cartItemVm.removeCart = removeCart;
        cartItemVm.checkOut = checkOut;


        init();

        function init(){
            console.log('init method in cart controller');
            cartItemVm.cartItems = cartItemService.getCartItems();
            if(cartItemVm.cartItems === undefined || cartItemVm.cartItems.length === 0 ){
                cartItemVm.spinner = false;
            }
            cartItemVm.cartItems2 = [];
            for(var i = 0; i < cartItemVm.cartItems.length ; i++){
                var quantity = cartItemVm.cartItems[i].productQuantity;
                productService.getProductsInfo(cartItemVm.cartItems[i].productId)
                    .then(function (productInfo) {
                        cartItemVm.cartProduct = productInfo;
                        console.log(quantity);
                        cartItemVm.cartProduct.productQuantity = cartItemService.getProductQuantity(cartItemVm.cartProduct.productId);
                        cartItemVm.cartProduct.totalPrice = cartItemService.getTotalPrice(cartItemVm.cartProduct.productQuantity,cartItemVm.cartProduct.productPrice);
                        cartItemVm.cartItems2.push(cartItemVm.cartProduct);
                        cartItemVm.totalCartPrice = cartItemService.getTotalCartPrice(cartItemVm.cartItems2);
                        cartItemVm.numberOfItems = cartItemService.getNumberOfItems();
                        checkNumberOfItems();
                    },function (error) {
                        console.log('Some error from product controller'+error);
                    }).finally(function () {
                    cartItemVm.spinner = false;
                });
            }
        }

        function checkNumberOfItems() {
            if(cartItemVm.numberOfItems > 0 ){
                cartItemVm.disableButtons = false;
                cartItemVm.showLayout = true;
            }
        }

         function checkOut() {

             for(var i = 0; i < cartItemVm.cartItems2.length ; i++){
                 cartItemService.updateItem(i,cartItemVm.cartItems2);
             }
             $location.path('/customerdetails');
         }

        function removeItem(productId) {
            cartItemService.removeItem(productId);
            init();
        }

        function updateItem(index,cartItem) {
            console.dir(cartItem);
            cartItemService.updateItem(index,cartItemVm.cartItems2);
            Notification.success("Updated the cart Successfully... :)");

            init();
        }
        
        function removeCart() {
            cartItemVm.toRemove =  confirm("This would delete all the cart items");
            console.log(cartItemVm.toRemove);
            if (cartItemVm.toRemove === true) {
                cartItemService.removeCart();
                cartItemVm.disableButtons = true;
                cartItemVm.showLayout = false;
            }
            init();
        }
    }

})();