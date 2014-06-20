function pullFeed() {
	var parms = {
		count: '20'
		,client_id: 'df70d4f39d3649a9b724876a0f2de343'
	}

	var end = "https://api.instagram.com/v1/users/276609664/media/recent/?client_id=df70d4f39d3649a9b724876a0f2de343";

https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code

	$.ajax({
		type: "GET"
		,url: end
		,dataType: "jsonp"
		,data: parms
		,success: function(res){
			console.log(res)
			var links = res.data;

			for(i=1;i<links.length;i++) {
				var lead = links[i]
					,src = lead.images.thumbnail.url
					,tag = lead.tags
					,image = lead.images.standard_resolution.url
					,caption = lead.caption.text;

					$("#insta-feed").append("<div class='insta-image-con'><img class='insta-image-img' src='" + src + "'/><p>" + caption + "</p></div>");

			}

		
		}
	});

}


	$(document).ready(function(){
		pullFeed();
	});
