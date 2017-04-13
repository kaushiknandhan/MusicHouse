/**
 * Created by kaushik nandhan on 3/28/2017.
 */

(function() {
    'use strict';
    angular.module('musichouse')
        .controller('navBarController',navBarController);
    navBarController.$inject = ['cartItemService','$scope','userService','$route'];
    function navBarController(cartItemService,$scope,userService,$route) {
       var navbarVm = this;
        navbarVm.user = {};
        navbarVm.cartValue = 0;
        navbarVm.dropDownActive = false;
        navbarVm.isloggedIn = false;
        navbarVm.dropDownActivate = dropDownActivate;
        navbarVm.checkUserLogedIn = checkUserLogedIn;
        navbarVm.userLogOut = userLogOut;

        checkUserLogedIn();

        console.log('navBar controller');
        $scope.$watch(
            function () {
                navbarVm.cartValue = cartItemService.getNumberOfItems();
                return navbarVm.cartValue;
            }, function(newValue, oldValue) {
            if ( newValue !== oldValue ) {
                // Only increment the counter if the value changed

            }
        });

        function checkUserLogedIn() {
            navbarVm.user = userService.getUser();
            if( navbarVm.user === undefined){
                navbarVm.isloggedIn = false;
            }else{
                navbarVm.isloggedIn = true;
            }

        }
        function userLogOut() {
            console.log('log out');
            userService.userLogOut();
            $route.reload();
        }

        function dropDownActivate() {
            navbarVm.dropDownActive =   !navbarVm.dropDownActive;
        }
    }
})();

