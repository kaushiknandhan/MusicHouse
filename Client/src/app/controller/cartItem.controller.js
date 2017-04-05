/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('cartItemController',cartItemController);

    cartItemController.$inject = ['cartItemService'];
    function cartItemController(cartItemService){
        var cartItemVm = this;
        cartItemVm.cartItems = [];

        init();

        function init(){
            cartItemVm.cartItems = cartItemService.getCartItems();
        }
    }

})();