(function(){
    'use strict';
    angular.module('starter')
    .controller('DashCtrl', function($scope, $state, User, $rootScope){
        /*Note.count().then(function(response){
            $scope.count= response.data.count;
        });*/
        $scope.logout = function(){
            User.logout().then(function(response){
                console.log('user logged out');
                $state.go('tab.account');
                $rootScope.rootuser = null;
          }, function(){
            console.log('error logging out');
          });
        };
    });
})();
