var app = angular.module('gallery', ['ngRoute']);

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
    .when('/ui', {
    	controller: 'UiController',
    	templateUrl: '/views/gallery.html'
    })
    .when('/about', {
    	templateUrl: '/views/about.html'
    })
    .when('/contact', {
    	templateUrl: '/views/contact.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

