app.directive('displayGallery', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      art: '=' 
    }, 
    templateUrl: 'js/gallery/gallery_directive.html'
    // link: function(scope, element, attrs) {}
  }; 
});