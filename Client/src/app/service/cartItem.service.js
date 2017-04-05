/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('cartItemService',cartItemService);

    cartItemService.$inject = ['$http','$q'];
    function cartItemService($http,$q){
        var cartItemVm = this;
        cartItemVm.cart = [];
        cartItemVm.addCartItems = addCartItems;
        cartItemVm.getCartItems = getCartItems;

        function addCartItems(product){
            cartItemVm.cart.push(product);
            console.dir(cartItemVm.cart);
            return true;
        }

        function getCartItems() {
            return cartItemVm.cart;
        }


    }
})();