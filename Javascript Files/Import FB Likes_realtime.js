//---------------------------
//JSON Import Likes from LOFT
//http://bit.ly/1bA0oJv
//---------------------------
<script>
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
</script>

//---------------------------
//Change Twitter Share Copy
//---------------------------
<script>
jQuery(function($){
	$('#share-option-twitter a').attr('href','http://twitter.com/share?text=Just%20entered%20the%20%2321DaysofColor%20sweepstakes%20via%20%40BehrPaint%20for%20a%20chance%20to%20win%20a%20can%20of%20paint&url=http%3A%2F%2Fbit.ly%2F19EQ8Ae');
});

</script>

