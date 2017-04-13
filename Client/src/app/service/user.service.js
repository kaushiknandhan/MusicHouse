/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('userService',userService);

    userService.$inject = ['$http','$q','$localStorage'];
    function userService($http,$q,$localStorage){
        var userVm = this;
        userVm.loginUser = loginUser;
        userVm.signUp = signUp;
        userVm.getUser = getUser;
        userVm.userLogOut = userLogOut;


        function loginUser(userObj){
            return $http.post('http://localhost:8080/musichouse/api/users/login',userObj)
                .then(successFn,errorFn);
        }

        function signUp(newUser){
            return $http.post('http://localhost:8080/musichouse/api/users/register',newUser)
                .then(successFn,errorFn);
        }

        function getUser() {
            return $localStorage.user;
        }

        function userLogOut() {
            console.log('user service logout');
            $localStorage.$reset();
        }

        function successFn(response){
            return response.data;
        }
        function errorFn(response) {
            return $q.reject('some error from server: '+response.statusText);
        }
    }
})();