/**
 * Created by kaushik nandhan on 4/9/2017.
 */

(function() {
    'use strict';
    angular.module('musichouse')
        .controller('navBarAdminController',navBarAdminController);
    navBarAdminController.$inject = ['cartItemService','$location','$scope','userService','Notification','$route'];
    function navBarAdminController(cartItemService,$location,$scope,userService,Notification,$route) {
        var navbarAdminVm = this;
        navbarAdminVm.user = {};
        navbarAdminVm.cartValue = 0;
        navbarAdminVm.isloggedIn = false;
        navbarAdminVm.dropDownActive = false;
        navbarAdminVm.dropDownActivate = dropDownActivate;
        navbarAdminVm.checkUserLogedIn = checkUserLogedIn;
        navbarAdminVm.userLogOut = userLogOut;

        checkRoleForAccess();
        checkUserLogedIn();

        console.log('navBar controller');
        $scope.$watch(
            function () {
                navbarAdminVm.cartValue = cartItemService.getNumberOfItems();
                return navbarAdminVm.cartValue;
            }, function(newValue, oldValue) {
                if ( newValue !== oldValue ) {
                    // Only increment the counter if the value changed

                }
            });

        // TO do nabBar button functionality

        function dropDownActivate() {
            navbarAdminVm.dropDownActive =   !navbarAdminVm.dropDownActive;
        }

        function checkRoleForAccess() {
            navbarAdminVm.user = userService.getUser();
            console.log(navbarAdminVm.user);
            if(navbarAdminVm.user === undefined || navbarAdminVm.user.role  !== "admin"){
                Notification.warning("Warning!!! Unautherize Page Access. Please login with proper credentials");
                $location.path('/products');
            }
        }

        function checkUserLogedIn() {
            if(userService.getUser() === undefined){
                navbarAdminVm.isloggedIn = false;
            }else{
                navbarAdminVm.isloggedIn = true;
            }

        }
        function userLogOut() {
            console.log('admin log out');
            userService.userLogOut();
            $route.reload();
        }
    }
})();
