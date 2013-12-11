<script type='text/javascript'>

function readCookie( cName )
{
 var v;

 return ( document.cookie !== undefined )
        ?  decodeURIComponent ( (v = document.cookie.match( "(^|\\s|;)"+cName+"=([^;$]+)" ) ) ? v[2] : "" )
        : "";
}

function setCookie( cName, value, days, path )
{
 var expires = "", dt = new Date();

 if( days )
  expires = "; expires=" + new Date( dt.setDate( dt.getDate() + days ) ).toGMTString();

 document.cookie = cName + "=" + encodeURIComponent( value ) + expires + (path ? "; path=" + path : "" );

 return readCookie( cName );
}

if( !readCookie( 'userName' ) && location.href != "http://subdomain.domain.com" )
 location.href = "http://subdomain.domain.com";

setCookie( 'userName', 'ok', 0, '/' );

</script>


//COOKIE REDIRECT WORKING
function redirect(){
	var thecookie = readCookie('doRedirect');
		if(!thecookie){
			window.location = 'http://www.google.com'; //set the url you want to redirect to here 
		}
	}

					function createCookie(name,value,days){
							if (days){
								var date = new Date();
								date.setTime(date.getTime()+(days*24*60*60*1000));
								var expires = "; expires="+date.toGMTString();
							}else var expires = "";
								document.cookie = name+"="+value+expires+"; path=/";
							}

			function readCookie(name){
					var nameEQ = name + "=";
					var ca = document.cookie.split(';');
					for(var i=0;i < ca.length;i++){
							var c = ca[i];
							while (c.charAt(0)==' ') c = c.substring(1,c.length);
								if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
					}
			return null;
			}

window.onload = function()
{
redirect();
createCookie('doRedirect','true','999');
}

//On page load a cookie is created. After each page load if the cookie doesn't exist the user will get redirected. As long as the cookie exists then the user will not get redirected.



<script>
if (document.location.search.indexOf("skipmobile") >= 0) {
document.cookie = "skipmobile=1";
}
else if ((document.location.hostname.match(/\.mobi$/) || screen.width < 699)
&& document.cookie.indexOf("skipmobile") == -1)
{
document.location = "mobile/";
}
</script>


<script>
//CANON Cookie to expire at midnight
function midnight_cookie(name, value, path)
{
  var now = new Date();
  var expire = new Date();
  expire.setFullYear(now.getFullYear());
  expire.setMonth(now.getMonth());
  expire.setDate(now.getDate()+1);
  expire.setHours(0);
  expire.setMinutes(0);
  document.cookie = name+"="+value+"; expires=" + expire.toString() +"; path=" + path;
}

</script>


<script>
//CANON Version 2 cookie expire at midnight
function createCookie(name,value,path) {
	var expires = "";
	var date = new Date();
	var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
	expires = "; expires=" + midnight.toGMTString();
	if (!path) {
		path = "/";
	}
	document.cookie = name + "=" + value + expires + "; path=" + path;
}

createCookie('RobertsCookie', 'true', '/');
</script>




<script>
//CANON Version 3 cookie expire at midnight
jQuery(function($){

	$('#form_submit_button').click(function(e){
		//console.log('button was clicked');
		var photoId = $('#photo_id').val().length
	   ,caption = $('#caption').val().length
	   ,firstname = $('#firstname').val().length
	   ,lastname = $('#lastname').val().length
	   ,email = $('#email').val().length
	   ,city = $('#city').val().length
	   ,optin = $('#optin2').attr('checked')

		if (photoId > 0 && caption > 0 && firstname > 0 && lastname	> 0 && email > 0 && city > 0 && optin === 'checked'){
			//console.log('passed form');

		function redirect(){
			var thecookie = readCookie('RobertsCookie');
			//console.log(thecookie);
			//console.log('redirect cookie');
		if(thecookie){
				e.preventDefault();
				alert('Sorry, you have already entered this contest');
				return false;
			}
		}

			redirect();
			createCookie('RobertsCookie', 'true', '/');

		function createCookie(name,value,path) {
			//console.log('created cookie');
			var expires = "";
			var date = new Date();
			var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
			expires = "; expires=" + midnight.toGMTString();
			if (!path) {
				path = "/";
			}
			document.cookie = name + "=" + value + expires + "; path=" + path;
		}

			function readCookie(name){
				//console.log('read cookie');
					var nameEQ = name + "=";
					var ca = document.cookie.split(';');
					for(var i=0;i < ca.length;i++){
							var c = ca[i];
							while (c.charAt(0)==' ') c = c.substring(1,c.length);
								if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
					}
			return null;
			}

		}
	});
});
</script>

