(function(){
    'use strict';
    
    angular.module('starter')
    .factory('Note', ['$http', function($http){
        function count(){
            return $http.get('http://localhost:3334/notes/count');
        }
    }]);
})();