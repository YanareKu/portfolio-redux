var app = angular.module('gallery', ['ngRoute', 'ngSanitize']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'IllustController', 
      templateUrl: 'views/gallery.html' 
    })
    .when('/vector', {
    	controller: 'VectorController',
    	templateUrl: '/views/gallery.html'
    })
    .when('/about', {
    	controller: 'AboutController',
    	templateUrl: '/views/about.html'
    })
    .when('/contact', {
    	controller: 'ContactController',
    	templateUrl: '/views/about.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

