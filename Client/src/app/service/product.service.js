/**
 * Created by kaushik nandhan on 3/19/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('productService',productService);

    productService.$inject = ['$http','$q'];
    function productService($http,$q) {
        var productVm = this;
        productVm.getProducts = getProducts;
        productVm.getProductsInfo = getProductsInfo;
        productVm.getProductsByType = getProductsByType;
        productVm.addProduct = addProduct;
        productVm.editProduct = editProduct;

        function getProducts(){
            return $http.get('http://localhost:8080/musichouse/api/products/')
                .then(successFn,errorFn);
        }
        function getProductsInfo(productId) {
            return $http.get('http://localhost:8080/musichouse/api/products/'+productId)
                .then(successFn,errorFn);
        }

        function addProduct(newProduct) {
            return $http.post('http://localhost:8080/musichouse/api/products/',newProduct)
                .then(successFn,errorFn);
        }

        function  getProductsByType(type) {
            return $http.get('http://localhost:8080/musichouse/api/products/category/'+type)
                .then(successFn,errorFn);
        }

        function  editProduct(product,productId) {
            return $http.put('http://localhost:8080/musichouse/api/products/'+productId,product)
                .then(successFn,errorFn);
        }
        function successFn(response) {
            return response.data;
        }
        function errorFn(response) {
            return $q.reject('Some error'+response.statusText);
        }


    }
})();