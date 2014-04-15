// How to make the Gallery the default landing page of Photo/Video Contest

jQuery(function($){
//.SDescription only exists on default About Tab - Do Not Edit
if ($('.SDescription').length > 0){
var gallery = $('#cnav_view').attr('href');
window.open( gallery , '_self');
}
});


// Mobile:
// Visit the mobile experience and look at the navigation bar.  Each tab in the mobile app is alphabetized from left to right in the following structure: 
// .ui-block-a a, .ui-block-b a, .ui-block-c a, .ui-block-d a
// Locate which position the "About Page" is in the navigation and change the corresponding letter highlighted in green below.  Then locate the "Gallery Page" and also update the corresponding letter highlighted in blue below. You can then copy and paste this portion into the Mobile CSS sheet.


jQuery(function($){
//Appends Hash variable to About Tab Link
var defaultAboutPage = '.ui-navbar.ui-mini .ui-block-d a'
	,redirectTo = '.ui-navbar.ui-mini .ui-block-a a';

var aboutPage = $(defaultAboutPage).attr('href');
$(defaultAboutPage).attr('href', aboutPage + '#fromXlink');

//If Hash variable is carried through change AboutPage ID
if (location.hash == '#fromXlink') {
$('#AboutPage').attr('id','AboutPage2');
}

//Redirect if AboutPage ID is detected - First Visit
if ($('#AboutPage').length > 0){
var openRedirect = $(redirectTo).attr('href');
window.open( openRedirect , '_self');
}
});

// Note: For mobile, the ‘.ui-block-a a’ class might change due to the submission period.  

