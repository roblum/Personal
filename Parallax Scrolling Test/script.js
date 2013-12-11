$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
     var $smile = $(this).find('article')
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		var syPos = ($window.scrollTop() / $smile.data('speed')); 

		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
		var scoords = 'rotate(' + syPos + 'deg)'
		,translate = 'translate(' + syPos + 'px,' + syPos + 'px)';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		//$smile.css( "-webkit-transform", scoords ); //Rotate smile face
		if (syPos < 1000){
		$smile.css( "-webkit-transform", translate ); //Slide smile face right
	}
		
}); // window scroll Ends

 });	

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");