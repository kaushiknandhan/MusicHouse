/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('cartItemService',cartItemService);

    cartItemService.$inject = ['$http','$q','Notification','$sessionStorage'];
    function cartItemService($http,$q,Notification,$sessionStorage  ){
        var cartItemVm = this;
        console.log('cartItemService method in cart service');
        cartItemVm.cart = [];
        cartItemVm.cartProdct = {};
        cartItemVm.addCartItems = addCartItems;
        cartItemVm.getCartItems = getCartItems;
        cartItemVm.removeItem = removeItem;
        cartItemVm.updateItem = updateItem;
        cartItemVm.removeCart = removeCart;
        cartItemVm.getTotalPrice = getTotalPrice;
        cartItemVm.getNumberOfItems = getNumberOfItems;
        cartItemVm.getTotalCartPrice = getTotalCartPrice;
        cartItemVm.getProductQuantity = getProductQuantity;
        cartItemVm.isProductInCart = isProductInCart;
        cartItemVm.invokeInit = invokeInit;

        init();

        function init() {
            console.log('init method from cartItem');
            if($sessionStorage.myCart !== undefined){
                cartItemVm.cart = $sessionStorage.myCart;
            }else{
                cartItemVm.cart = [];
            }
        }

        function invokeInit() {
            init();
        }
        function addCartItems(product) {


            if(isProductInCart(product.productId)){
                // notify product already exists
                console.log('entered if statement');
                return "exists";
            }else{
            cartItemVm.cartProdct.productId = product.productId;
            cartItemVm.cartProdct.productQuantity = 1;
            cartItemVm.cart.push(cartItemVm.cartProdct);
                $sessionStorage.myCart  = cartItemVm.cart;
                cartItemVm.cartProdct = {};
            return true;
            }
        }
        function isProductInCart(productId) {
            console.log('entered isProductInCart');
            var exists = false;
            for(var i = 0;i <cartItemVm.cart.length ; i++){
                if(cartItemVm.cart[i].productId === productId){
                    exists = true;
                    break;
                }
            }
            return exists;
        }

        function getProductQuantity(productId) {
            var quantity = 0;
            for(var i =0 ; i<cartItemVm.cart.length;i++){
                if(cartItemVm.cart[i].productId === productId){
                    quantity = cartItemVm.cart[i].productQuantity;
                    break;
                }
            }
            return quantity;
        }

        function getCartItems() {
            return cartItemVm.cart;
        }

        function getNumberOfItems() {

            return cartItemVm.cart.length
        }

        function updateItem(index,cartArr) {
            var quantity = 0;
            var productId = "";
            quantity = cartArr[index].productQuantity;
            productId = cartArr[index].productId;
            cartItemVm.cart = cartItemVm.cart.map(function (val) {
               if(val.productId === productId){
                   val.productQuantity = quantity;
               }
               return val;
            });
            $sessionStorage.myCart = cartItemVm.cart;

        }


        function removeItem(productId){
            console.log(productId);
            cartItemVm.cart = cartItemVm.cart.filter(function (val) {
               if(val.productId !== productId){
                   return val;
               }
            });
            $sessionStorage.myCart  = cartItemVm.cart;
        }

        function removeCart() {
            cartItemVm.cart = [];
            $sessionStorage.myCart = cartItemVm.cart;
            return true;
        }
        function getTotalPrice(quantity,price) {
            return quantity*price;
        }
        function getTotalCartPrice(cartArr) {
            var sum = 0;
            cartArr.map(function (val) {
                sum += val.totalPrice;
            });
            return sum;
        }
    }
})();