/**
 * Created by kaushik nandhan on 3/19/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('customerDetailsService',customerDetailsService);

    customerDetailsService.$inject = ['$http','$q','$sessionStorage'];
    function customerDetailsService($http,$q,$sessionStorage){
        var customerDetailVm = this;
        customerDetailVm.setCustomerInfo = setCustomerInfo;
        customerDetailVm.getCustomerInfo = getCustomerInfo;

        function setCustomerInfo(customerInfo){
            $sessionStorage.customerInfo = customerInfo;
        }

        function getCustomerInfo() {
            return $sessionStorage.customerInfo;
        }

    }
})();