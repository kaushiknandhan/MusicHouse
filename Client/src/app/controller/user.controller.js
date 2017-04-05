/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .controller('userController',userController);

    userController.$inject = ['userService','$location'];
    function userController(userService,$location){
        var userVm = this;
        userVm.user = {};
        userVm.newUser = {};
        userVm.login = login;
        userVm.signup = signup;

        // login functionality
        function login(){
            userService.loginUser(userVm.user)
                .then(function (user) {
                    userVm.user = user;
                    console.dir(userVm.user);
                    $location.path('/home');
                },function (error) {
                    console.log('error in user controller'+error);
                });
        }

        // signUp functionaloty

        function signup(){
            userVm.newUser.createdOn = (new Date).getTime();
            userService.signUp(userVm.newUser)
                .then(function (newUser) {
                    userVm.newUser =  newUser;
                    console.dir(userVm.newUser);
                    $location.path('/login');
                },function (error) {
                    console.log('error @ sgnup functionality in user controller :'+error);
                });
        }
    }
})();