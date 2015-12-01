'use strict';

let app = angular.module('socialLogin', ['satellizer', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', { url: '/', templateUrl: 'partials/home.html', controller: 'homeCtrl'})
    .state('login', { url: '/login', templateUrl: 'partials/login.html', controller: 'loginCtrl'})
    
    .state('profile', { url: '/profile', templateUrl: 'partials/profile.html', controller: 'profileCtrl'})
    .state('allusers', { url: '/userlist', templateUrl: 'partials/allusers.html', controller: 'allusersCtrl'})
    .state('chatcenter', { url: '/chatcenter', templateUrl: 'partials/chatCenter.html', controller: 'chatcenterCtrl'})

    $authProvider.github({
      clientId: '41bf24830ea2aa8d21cf'
    });
    $authProvider.google({
      clientId: '564931565597-bpqo7osbkterb7fjemklkql3ntcs2eah.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '896815390388307'
    });

    $authProvider.twitter();

    // $authProvider.live({
    //   clientId: '000000004C173030',
    //   authorizationEndpoint: 'https://login.live.com/oauth20_desktop.srf',
    //   redirectUri: 'http://mylocalwebsite.net:3000'

    // });
});
