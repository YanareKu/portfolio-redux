app.controller('ContactController', ['$scope', function($scope) {
	$scope.title = "Contact";
	$scope.images = [{
		image: 'img/contact1.jpg',
	}];

	$scope.content = '<p><b><span class="emphasis">H</span>ow To Get A Hold Of Me:</b></p>' +
		'<p><a href="mailto:lurial@gmail.com"><img src="img/mail.png" /></a></p>' +

		'<p><b><span class="emphasis">W</span>here Else You Can Find Me:</b><br></p>' +
		'<p><a href="http://reallurial.deviantart.com"><img src="img/da.png" /></a><a href="https://github.com/YanareKu"><img src="img/github.png" /></a></p>';
}]);