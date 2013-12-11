//---------------------------
//JSON Import Likes from LOFT
//http://bit.ly/1bA0oJv
//---------------------------

jQuery(function($){
	var runJSON = function(){
			var cLikes = $('#inputBox').text();
			$.getJSON( "https://graph.facebook.com/loft?callback=?", function( data ) {
			var likes = data.likes;

			if(cLikes < likes){
				$('#inputBox').html(likes);
			} 			
			setTimeout(runJSON, 5000)
		});
	}

	$(document).ready(function(){
		runJSON()
	});

});

