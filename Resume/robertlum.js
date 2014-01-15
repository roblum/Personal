// JavaScript Document
$(document).ready(function(){
	$(".educationbox, .skillsbox, .linkedinbox, .mailbox, .experiencebox").mouseenter(function(){
		$(this).fadeTo("fast", 0.7);
		});
	$(".educationbox, .skillsbox, .linkedinbox, .mailbox, .experiencebox").mouseleave(function(){
		$(this).fadeTo("fast", 1);
		});	
	});

$(document).ready(function(){
	$(".experiencebox").click(function(){
		$("#tabs").slideToggle("fast");
		});
	});


$(document).ready(function() {		   
		$('a.popup').click(function() {				
			var popuprel = $(this).attr('rel');
			$('#' + popuprel).fadeIn();
			$('#fadebg').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
			var topindent = ($('#' + popuprel).height() + 10) / 2;
			var leftindent = ($('#' + popuprel).width() + 10) / 2;
			$('#' + popuprel).css({
			'margin-top' : -topindent,
			'margin-left' : -leftindent
		});
	});
	
	$('#fadebg , .closebutton').click(function() {
			  
	$('#fadebg , #popbox1 , #popbox2 , #popbox3 , #popbox4').fadeOut()
	return false;
	});
});


$(document).ready(function(){
$('#thumbs').delegate('img','click', function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
});

});