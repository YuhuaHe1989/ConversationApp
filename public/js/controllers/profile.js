'use strict';

angular.module('socialLogin')
.controller('profileCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }

  $http.get('/users/me')
  .then(function(res) {
    $scope.user = res.data;
    console.log('res:', res);
    $http.get('/users/chatcenter/' + $scope.user.displayName)
    .then(function(res) {
      $scope.talks = res;
      console.log('talks:', res);
    }, function(err) {
      console.error(err);
    });
  }, function(err) {
    console.error(err);
  });

  $scope.postmessage = function(data) {
    $scope.showMessage = data;
    $scope.message = '';

    var obj = {
      name: $scope.user.displayName,
      message: data
    }

    $http.post('/users/chatcenter/' + $scope.user.displayName, obj)
    .success(function(response) {
      console.log(response);
    });

   }
});




