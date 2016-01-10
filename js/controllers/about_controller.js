app.controller('AboutController', ['$scope', function($scope) {
	$scope.title = "About";
	$scope.images = [{
		image: 'img/about1.jpg',
	},
	{
		image: 'img/about2.jpg'
	}];

	$scope.content = "<p><span class=\"emphasis\">W</span>hile by day I work in web development as a cheerful, pint-sized engineer, by night I am an avid painter of all things mysterious and fantastic.</p>" +

		"<p>With a childhood spent reading every fantasy and sci-fi book within reach and playing every video game I could get a hold of, I've always been drawn to epic scenes of badassery and wonder.  Thus, it didn't come as a big surprise to my friends and family when I was found latched onto my computer painting things like giant, rocket-powered, titanium space dragons shooting lasers from their eyes and miniature space hamsters from their mouths.</p>" +

		"<p>I previously worked in the bustling, fast-paced world of the mobile gaming industry as a Senior Artist where I regularly coordinated with multiple teams under tight deadlines to create a solid product, before transitioning over to a Development Intern at LUZ, Inc. to get my feet wet and hands dirty in the world of engineering. I am extremely enthusiastic about both code and art, and appreciate all opportunities that allow me to learn and expand upon my current skillsets - particularly ones that allow me to flex both halves of my brain.</p>" +

		"<p>My resume can be found here:  <a href=\"YanareKuResume_2015_web.pdf\">Click me!</a></p>";
}]);