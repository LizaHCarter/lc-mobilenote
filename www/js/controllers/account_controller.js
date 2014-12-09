(function(){
    'use strict';
    angular.module('starter')
    .controller('AccountCtrl', function($scope, User, $state){
        $scope.user = {};
        $scope.login = function(user){
            User.login(user).then(function(){
                console.log('authenticated');
                $state.go('tab.dash');
                $scope.user={};
            }, function(){
                console.log('bad credentials');
                $scope.user={};
            });
        };
    });
})();
