/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('cartItemService',cartItemService);

    cartItemService.$inject = ['$http','$q','$localStorage'];
    function cartItemService($http,$q,$localStorage){
        var cartItemVm = this;
        console.log('cartItemService method in cart service');
        cartItemVm.cart = [];
        cartItemVm.addCartItems = addCartItems;
        cartItemVm.getCartItems = getCartItems;
        cartItemVm.removeItem = removeItem;
        cartItemVm.updateItem = updateItem;

        init();

        function init() {
            cartItemVm.cart = $localStorage.myCart;
        }

        function addCartItems(product){
            product.productQuantity = 1;
            cartItemVm.cart.push(product);
            $localStorage.myCart  = cartItemVm.cart;
            return true;
        }

        function getCartItems() {
            return cartItemVm.cart;
        }

        function updateItem(productId,cartItem) {
            cartItemVm.cart = cartItemVm.cart.map(function(val) {
                if(val.productId === productId){
                    console.log(cartItem.productQuantity);
                    val = cartItem;
                }
                return val;
            });
            console.dir(cartItemVm.cart);
            $localStorage.myCart  =  cartItemVm.cart;
        }

        function removeItem(productId){
            cartItemVm.cart = cartItemVm.cart.filter(function (val) {
                if(val.productId !== productId){
                    return val;
                }
            });
            $localStorage.myCart  = cartItemVm.cart;
        }
    }
})();