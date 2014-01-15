<style>
.invalidBdayBox{
	border:1px solid red !important;
}
#invalidBday{
	color:red;
	display:none;
    float:right;
}
</style>
<script>

jQuery(document).ready(function(){
jQuery(function($){
	$('label[for="birthday"]').html('Birthday<span id="invalidBday">Please enter a valid Birthday</span>');

	var validation = function(){
		var cValue = $('#birthday').val();
		cValue = cValue.replace(/\D/g,'');
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)){
						var bmonth = cValue.slice(4,6)-1
	        			,bdate = cValue.slice(6,8)
	        			,byear = cValue.slice(0,4)
	        			,formButton = '#form-submit-button';
	        			//console.log('mobile' + bmonth + '' + bdate + '' + byear + '' + formButton);
			} else{
			var bmonth = cValue.slice(0,2)-1
	        ,bdate = cValue.slice(2,4)
	        ,byear = cValue.slice(4,8)
	        ,formButton = '#form_submit_button';
	        //console.log('desktop' + bmonth + '' + bdate + '' + byear + '' + formButton);
	    		}
 
        		var convertDate = new Date(byear, bmonth, bdate)
        		,compareDate = convertDate.getTime();
        		//console.log(cValue);
        		//console.log('Month is: ' + bmonth + ';date is: ' + bdate + ';year is: ' + byear);
        		//console.log('convertDate:' + convertDate + 'compareDate:' + compareDate);

		        var dayInMilliseconds = 1000 * 60 * 60 * 24;
		        if(!cValue || Date.now() - compareDate < dayInMilliseconds * 365.25 * 18 + dayInMilliseconds || cValue.length !== 8) {
					$('#invalidBday').fadeIn();
					$('#birthday').addClass('invalidBdayBox');
					$(formButton).attr('disabled','disabled');
		            return false;
		        } else{
		        	$('#invalidBday').fadeOut();
		        	$('#birthday').removeClass('invalidBdayBox');
		        	$(formButton).removeAttr('disabled');
		        }
		}
	
	$('#birthday').change(function(){
		validation()
	});

	$('#frmSignUp').unbind('submit').submit(function(event) {
		validation()
	});

});
});

</script>


//ZIP CODE validation
jQuery(function($){

	var zipValidation = function(){
		var zip = $('#zip').val();
 	 	if(!zip.match(/^\d{5}$/)){
 	 		console.log('the zip is not 5')
 	 	}
 	}

	$('#zip').change(function(){
		zipValidation()
	});

});

//Number Only Age validation
<script>
jQuery(function($){
	var birthdayField = '#surname';

	$(birthdayField).attr('maxlength','3');

	$(birthdayField).bind('keyup', function(){
  		this.value = this.value.replace(/[^0-9]/g,'');
	});

	$(birthdayField).change(function(){
		var userAge = parseInt($(this).val().trim());
			if ( userAge < 18 ){
				$( '#form_submit_button, #form-submit-button' ).attr( 'disabled' , 'disabled' );
			} else{
				$( '#form_submit_button, #form-submit-button' ).removeAttr( 'disabled' );
			}
	});
});
</script>
