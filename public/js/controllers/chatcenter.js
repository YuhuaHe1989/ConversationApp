'use strict';

angular.module('socialLogin')
.controller('chatcenterCtrl', function($scope, $auth, $state, $http) {
  if(!$auth.isAuthenticated()){
    return $state.go('home');
  }

  // $http.get('/users/chatcenter' + )
  // .then(function(res) {
  //   $scope.users = res.data;
  // }, function(err) {
  //   console.error(err);
  // });

   // $http.get('/users/me')
   //  .then(function(res) {
   //    $scope.user = res.data;
   //    console.log('res:', res);
   //    $http.get('/users/chatcenter/' + $scope.user.displayName)
   //    .then(function(res) {
   //      $scope.talks = res;
   //      console.log('talks:', res);
   //    }, function(err) {
   //      console.error(err);
   //    });
   //  }, function(err) {
   //    console.error(err);
   //  });

});
