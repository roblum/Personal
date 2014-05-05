//Photo Contest
//Change Twitter Share Copy
if ($('#share-option-twitter').length > 0 ){
var bitLy = $('#share-option-link input').attr('value');
$('#share-option-twitter a').attr('href','http://twitter.com/share?text=I%20just%20entered%20to%20win%20a%20VIP%20trip%20to%20the%20%40VIZIO%20BCS%20National%20Championship!%20Vote%20for%20me%20in%20the%20%23VIZIOFanThrowdown%3A&url=' + bitLy);
}

//Change Email Share Copy
if ($('#share-option-email').length > 0 ){
var bitLy = $('#share-option-link input').attr('value').slice(14,20);
$('#share-option-email a').attr('href', 'mailto:?body=I%20just%20entered%20to%20win%20a%20VIP%20trip%20to%20the%20VIZIO%20BCS%20National%20Championship.%20Vote%20for%20me%20in%20the%20VIZIO%20Fan%20Throwdown%3A%20http%3A//bit.ly/' + bitLy + '&subject=Vote%20for%20me%20in%20the%20VIZIO%20Fan%20Throwdown!');
}

//Change Pinterest Share Copy
if ($('#share-option-pinterest').length > 0 ){
var sLink = $('#share-option-pinterest a').attr('href').indexOf('url=') + 4
,eLink = $('#share-option-pinterest a').attr('href').indexOf('&media')
,aLink = $('#share-option-pinterest a').attr('href').slice(sLink, eLink)
,img = $('#media-photo').attr('src');
$('#share-option-pinterest a').attr('href', 'http://pinterest.com/pin/create/button/?url=' + aLink + '&media=' + img + '&description=I%20just%20entered%20to%20win%20a%20VIP%20trip%20to%20the%20VIZIO%20BCS%20National%20Championship.%20Vote%20for%20me%20in%20the%20%23VIZIOFanThrowdown!');
}

//Mobile Photo Contest
//Change Twitter Share Copy
if ($('#entry-twitter-share').length > 0 ){
var bitLy = $('#share-url').attr('value');
$('#entry-twitter-share').attr('href','http://twitter.com/share?text=I%E2%80%99m%20%E2%80%9Cringing%20in%E2%80%9D%20the%20summer%20with%20a%20little%20extra%20sparkle%20on%20my%20finger!%20Enter%20to%20win%20%242K%20from%20%40davidsbridal%20%26%20%40Helzberg!&url=' + bitLy);
}

//Change Email Share Copy
if ($('#entry-email-share').length > 0 ){
var bitLy = $('#share-url').attr('value').slice(14,20);
$('#entry-email-share').attr('href', 'mailto:?body=This%20year%2C%20I%E2%80%99m%20%E2%80%9Cringing%20in%E2%80%9D%20the%20summer%20with%20a%20little%20extra%20sparkle%20on%20my%20finger!%20Check%20out%20my%20entry%20in%20the%20%E2%80%9CRing%20in%20the%20Summer%E2%80%9D%20Sweeps%20%26%20submit%20yours%20for%20a%20chance%20to%20win%20%242K%20from%20David%E2%80%99s%20Bridal%20%26%20Helzberg%20Diamonds!20http%3A//bit.ly/' + bitLy + '&subject=Enter%20to%20WIN%20%242K%20from%20David%E2%80%99s%20Bridal%20%26%20Helzberg%20Diamonds!');
}


//Referral Contest
//Change Twitter Share Copy
if ($('#share_twitter').length > 0 ){
var bitLy = $('#share_url').attr('value');
$('#share_twitter a').attr('href','http://twitter.com/share?text=I%20could%20win%20a%20year%27s%20worth%20of%20shu%20uemura%27s%20Lightbulb%20Foundation!%20Jealous%3F%20You%20can%20win%20too%20%23shulightbulb%20Sign-up%20here%3A&url=' + bitLy);
}

//Change Email Share Copy
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>
jQuery(function($){
//Change Email Share Copy
if ($('#share_email').length > 0 ){
var bitLy = $('#share_url').attr('value').slice(14,21);
$('#share_email a').attr('href', 'mailto:?body=Paste%20Copy%20Here%20http%3A//bit.ly/' + bitLy + '&subject=Paste%20Subject%20Here');
}
});
</script>