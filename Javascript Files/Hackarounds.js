Hackarounds

//Target nameless element on page with style
$("div [style*='#888']").hide();

//Target text node in nameless element
$(".CFile").contents().filter(function(){ return this.nodeType == 3; }).remove();

//Youtube window resize
var windowWidth = $(window).width(),
youtubeHeight = windowWidth * 0.75;
$('#youtubeVideo').attr('height', youtubeHeight);

$(window).resize(function(){
	var windowWidth = $(window).width(),
	youtubeHeight = windowWidth * 0.75;
	$('#youtubeVideo').attr('height', youtubeHeight);
});