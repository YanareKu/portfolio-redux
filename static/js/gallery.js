$(document).ready(function(){

// Galleries //
	var illust_gallery = {
		img1: "ama",
		img2: "danse",
		img3: "frozen_souls",
		img4: "spellstorm_artifacts"
	};

// Functions to Create Galleries //
	var illust = function(){
		for(var img in illust_gallery){
			$('.gallery').append('<div class="cell">' + 
				'<div class="thumbnail"><a href="../static/img/' + illust_gallery[img] + 
				'.jpg" data-lightbox="portfolio" data-title="Spellstorm: Amaterasu" target="_blank"><img src="../static/img/' + 
				illust_gallery[img] +'_thumb.jpg"></a>');
		}
	};

// Calling Gallery Function //

	illust();

});