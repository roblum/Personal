jQuery(function($){
	//Form Validation 01_27_14
	var firstname = $('#firstname')
		,lastname = $('#lastname')
		,email = $('#email')
		,address = $('#address')
		,state = $('#state')
		,city = $('#city')
		,zip = $('#zip')
		,dSubmitButton = $('#form_submit_button')
		,mSubmitButton = $('#form-submit-button');

	//Disable Submit Button on Page Load
	$(dSubmitButton).add(mSubmitButton).attr('disabled','disabled');

	//Mask Birthday field (Using Post)
	$('#post').mask('99/99/9999');

	//Checks if current field highlighted is empty
	var checkEmpty = function(field){
		if (!field.value){
			$(field).addClass('Invalid');
  		} else{
  			$(field).removeClass('Invalid');
		}
	}

	//Test all fields to enable Submit Button
	var enableSubmit = function(){
		var invalidCount = $('.Invalid').length;
		if (!firstname.val() || !lastname.val() || !email.val() || !address.val() || !state.val() || !city.val() || !zip.val()){
			$(dSubmitButton).add(mSubmitButton).attr('disabled','disabled');
			return false;
		}
		if (invalidCount < 1){
			$(dSubmitButton).add(mSubmitButton).removeAttr('disabled');
		} else{
			$(dSubmitButton).add(mSubmitButton).attr('disabled','disabled');
		}
	}

	//First Name, Last Name, State, and City must not have digits
	$(firstname).add(lastname).add(state).add(city).bind('keyup', function(){
  		this.value = this.value.replace(/\d|[\.,<>-?\/#!@$%\^&\*;:{}=+\-_`'"~()\\\[\]\|]/g,'');
  		checkEmpty(this);
  		enableSubmit();
	});

	//Email must match correct format
	$(email).bind('keyup',function(){
		var emailVal = email.val();
		if(!emailVal || !emailVal.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
			$(email).addClass('Invalid');
		} else{
			$(email).removeClass('Invalid');
		}
		enableSubmit();
	});

	//Zip Code must be numbers
	$(zip).bind('keyup', function(){
  		this.value = this.value.replace(/[^0-9]/g,'');
  		checkEmpty(this);
  		enableSubmit();
	});


});