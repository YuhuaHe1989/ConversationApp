'use strict';

angular.module('socialLogin')
.controller('allusersCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }

  $http.get('/users/allusers')
  .then(function(res) {
    $scope.users = res.data;
  }, function(err) {
    console.error(err);
  });

  $scope.gotoChatCenter = function(user) {
    $state.go('chatcenter');
  }
});





