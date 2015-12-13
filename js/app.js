var app = angular.module('gallery', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'IllustController', 
      templateUrl: 'views/illust.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

