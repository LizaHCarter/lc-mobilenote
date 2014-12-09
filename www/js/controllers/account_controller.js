(function(){
    'use strict';
    angular.module('starter')
    .controller('AccountCtrl', function($rootScope, $scope, User, $state){
        $scope.user = {};
        $scope.login = function(user){
            User.login(user).then(function(response){
                $rootScope.rootuser = response.data;
                $state.go('tab.dash');
                $scope.user={};
            }, function(){
                console.log('bad credentials');
                $scope.user={};
            });
        };
    });
})();
