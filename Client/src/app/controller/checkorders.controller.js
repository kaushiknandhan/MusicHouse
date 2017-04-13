/**
 * Created by kaushik nandhan on 4/10/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('checkordersController',checkordersController);

    checkordersController.$inject = ['billingService'];
    function checkordersController(billingService) {
        var checkordersVm = this;
        checkordersVm.spinner = true;
        checkordersVm.billingOrders = [];

        getAllOrders();

        function getAllOrders() {
            billingService.getAllOrders()
                .then(function (billingOrders) {
                    checkordersVm.billingOrders = billingOrders;
                },function (error) {
                    console.log('error in checkorders controller: '+error);
                }).finally(function () {
                checkordersVm.spinner = false;
            });
        }
    }


})();