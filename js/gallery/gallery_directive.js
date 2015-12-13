app.directive('imageGallery', function() { 
  	return { 
	    restrict: 'E', 
	    scope: { 
	      	art: '=' 
	    }, 
	    templateUrl: 'js/gallery/gallery_directive.html'
  	}; 
});
