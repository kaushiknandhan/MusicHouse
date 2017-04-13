/**
 * Created by kaushik nandhan on 4/9/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('addController',addController);

    addController.$inject = ['productService','Notification','$location'];
    function addController(productService,Notification,$location) {
        var addVm = this;
        addVm.newProduct = {};
        addVm.navBarAdd = "active";
        addVm.addProduct = addProduct;
        addVm.clearInputData = clearInputData;

        function addProduct() {
            productService.addProduct(addVm.newProduct)
                .then(function (newProduct) {
                    console.log(addVm.newProduct);
                 //   addVm.newProduct = newProduct;
                    Notification.success("New Product "+newProduct.productName+" is added Successfully");
                    $location.path('/products');
                },function (error) {
                    console.log('some errro from addProduct Controller: '+error);
                });

        }

        function clearInputData() {
            addVm.newProduct = {};
        }

    }
})();