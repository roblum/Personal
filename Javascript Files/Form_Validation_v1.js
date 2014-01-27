jQuery(function($){
	//Form Validation 01_27_14
	var firstname = $('#firstname')
		,lastname = $('#lastname')
		,email = $('#email')
		,address = $('#address')
		,state = $('#state')
		,city = $('#city')
		,zip = $('#zip')
		,birthday = $('#post'); //NOT USING STANDARD BIRTHDAY FIELD

	//Disable Auto-Complete on form
	$('#frmSignUp input').attr('autocomplete','off');

	var disableSubmit = function(){
		$('#form_submit_button, #form-submit-button').attr('disabled','disabled');
	}

	var enableSubmit = function(){
		$('#form_submit_button, #form-submit-button').removeAttr('disabled');
	}

	//Disable Submit Button on Page Load
	disableSubmit();

	//Mask Birthday field (Using Post)
	$(birthday).attr('placeholder','MM/DD/YYYY');
	$(birthday).mask('99/99/9999');

	//Checks if current field highlighted is empty
	var checkEmpty = function(field){
		if (!field.value){
			$(field).addClass('Invalid');
  		} else{
  			$(field).removeClass('Invalid');
		}
	}

	//Test all fields to enable Submit Button
	var testSubmit = function(){
		var invalidCount = $('.Invalid').length;
		if (!firstname.val() || !lastname.val() || !email.val() || !address.val() || !state.val() || !city.val() || !zip.val() || !birthday.val()){
			disableSubmit();
			return false;
		}
		if (invalidCount < 1){
			enableSubmit();
		} else{
			disableSubmit();
		}
	}

	//First Name, Last Name, State, and City must not have digits
	$(firstname).add(lastname).add(state).add(city).bind('keyup', function(){
  		this.value = this.value.replace(/\d|[\.,<>-?\/#!@$%\^&\*;:{}=+\-_`'"~()\\\[\]\|]/g,'');
  		checkEmpty(this);
  		testSubmit();
	});

	//Email must match correct format
	$(email).bind('keyup',function(){
		var emailVal = email.val();
		if(!emailVal || !emailVal.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
			$(email).addClass('Invalid');
		} else{
			$(email).removeClass('Invalid');
		}
		testSubmit();
	});

	//Zip Code must be numbers
	$(zip).bind('keyup', function(){
  		this.value = this.value.replace(/[^0-9]/g,'');
  		checkEmpty(this);
  		testSubmit();
	});

	//Birthday must be 18 or older
	$(birthday).bind('keyup',function(){
		var birthdayValue = $(birthday).val().replace(/\D/g,'')
			,bmonth = birthdayValue.slice(0,2)
	        ,bdate = birthdayValue.slice(2,4)
	        ,byear = birthdayValue.slice(4,8)
	        ,convertDate = new Date(byear, bmonth, bdate)
        	,compareDate = convertDate.getTime()
			,dayInMilliseconds = 1000 * 60 * 60 * 24;
			console.log('desktop' + bmonth + '' + bdate + '' + byear);
		    
		checkEmpty(this);

		if(!birthdayValue || Date.now() - compareDate < dayInMilliseconds * 365.25 * 18 + dayInMilliseconds || birthdayValue.length !== 8) {
			console.log('invalid birthday');
		    $(birthday).addClass('Invalid');
		} else{
			console.log('valid birthday');
		    $(birthday).removeClass('Invalid');
		}
		testSubmit();
	});


});