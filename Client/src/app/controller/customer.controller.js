/**
 * Created by kaushik nandhan on 3/19/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('customerDetailController',customerDetailController);

    customerDetailController.$inject = ['customerDetailsService','$location','$sessionStorage'];
    function customerDetailController(customerDetailsService,$location,$sessionStorage) {
        var customerDetailVm = this;
        customerDetailVm.customer = {}
        customerDetailVm.submitShippingDetials = submitShippingDetials;
        init();

        function init() {
            if($sessionStorage === undefined || $sessionStorage === null){
                customerDetailVm.customer = {};
            }else{
                customerDetailVm.customer = $sessionStorage.customerInfo;
            }
        }

        function submitShippingDetials() {
            console.log(customerDetailVm.customer);
            customerDetailsService.setCustomerInfo(customerDetailVm.customer);
            $location.path('/billingsummary');
        }
    }
})();