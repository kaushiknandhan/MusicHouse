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
        cartItemVm.removeItem = removeItem;
        cartItemVm.updateItem = updateItem;

        init();

        function init(){
            console.log('init method in cart controller');
            cartItemVm.cartItems = cartItemService.getCartItems();
        }

        function removeItem(cartItemId) {
            cartItemService.removeItem(cartItemId);
            init();
        }

        function updateItem(cartItemId,cartItem) {
            console.log(cartItemId);
            console.dir(cartItem);
            cartItemService.updateItem(cartItemId,cartItem);
            init();
        }
    }

})();