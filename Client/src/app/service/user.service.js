/**
 * Created by kaushik nandhan on 3/18/2017.
 */
(function () {
    'use strict';
    angular.module('musichouse')
        .service('userService',userService);

    userService.$inject = ['$http','$q'];
    function userService($http,$q){
        var userVm = this;
        userVm.loginUser = loginUser;
        userVm.signUp = signUp;


        function loginUser(userObj){
            return $http.post('http://localhost:8080/musichouse/api/users/login',userObj)
                .then(successFn,errorFn);
        }

        function signUp(newUser){
            return $http.post('http://localhost:8080/musichouse/api/users/register',newUser)
                .then(successFn,errorFn);
        }

        function successFn(response){
            return response.data;
        }
        function errorFn(response) {
            return $q.reject('some error from server: '+response.statusText);
        }
    }
})();