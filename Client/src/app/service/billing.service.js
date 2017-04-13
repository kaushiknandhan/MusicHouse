/**
 * Created by kaushik nandhan on 3/19/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('billingService',billingService);

    billingService.$inject = ['$http','$q'];
    function billingService($http,$q) {
        var billingVm = this;
        billingVm.submitOrder = submitOrder;
        billingVm.getAllOrders = getAllOrders;

        function submitOrder(cartList) {
            console.log('billing service');
            console.dir(cartList);
                return $http.post('http://localhost:8080/musichouse/api/billings',cartList)
                .then(successFn,errorFn);
        }

        function getAllOrders() {
            return $http.get('http://localhost:8080/musichouse/api/billings')
                .then(successFn,errorFn);
        }
        function successFn(response) {
            return response.data
        }
        function errorFn(response) {
            return $q.reject('some error: '+response.statusText);
        }




    }
})();