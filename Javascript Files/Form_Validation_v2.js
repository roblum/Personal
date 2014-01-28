jQuery(function($){
	//Form Validation 01_27_14
	var v = {
		firstname: 	$('#firstname')
		,lastname: 	$('#lastname')
		,email: 	$('#email')
		,address: 	$('#address')
		,state: 	$('#state')
		,city: 		$('#city')
		,zip: 		$('#zip')
		,birthday: 	$('#post') //NOT USING STANDARD BIRTHDAY FIELD
	}

	//Fix Date.now on IE8
	Date.now = Date.now || function() { return +new Date; };

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
	$(v.birthday).attr('placeholder','MM/DD/YYYY');
	$(v.birthday).mask('99/99/9999');

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
						var invalidCount = $('.Invalid').length
							,num = 0,cnum = 0;
						for (s in v){++num;++cnum;}
						for (e in v){
							if (!v[e].val()){
								console.log(e + 'is empty' + 'num' + num);
								--num
							}
						}
						if (num !== cnum){
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
			$(v.firstname).add(v.lastname).add(v.state).add(v.city).bind('keyup', function(){
		  		this.value = this.value.replace(/\d|[\.,<>-?\/#!@$%\^&\*;:{}=+\-_`'"~()\\\[\]\|]/g,'');
		  		checkEmpty(this);
		  		testSubmit();
			});

	//Email must match correct format
	$(v.email).bind('keyup',function(){
		var emailVal = v.email.val();
		if(!emailVal || !emailVal.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+/)) {
			$(v.email).addClass('Invalid');
		} else{
			$(v.email).removeClass('Invalid');
		}
		testSubmit();
	});

			//Zip Code must be numbers
			$(v.zip).bind('keyup', function(){
		  		this.value = this.value.replace(/[^0-9]/g,'');
		  		checkEmpty(this);
		  		testSubmit();
			});

	//Address must start out with digits, then one space
	$(v.address).bind('keyup',function(){
		console.log(this);
	});

	//Birthday must be 18 or older
	$(v.birthday).bind('keyup',function(){
		var birthdayValue = $(v.birthday).val().replace(/\D/g,'')
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
		    $(v.birthday).addClass('Invalid');
		} else{
			console.log('valid birthday');
		    $(v.birthday).removeClass('Invalid');
		}
		testSubmit();
	});

		var validateAgain = function(){
			
		}

		$('#frmSignUp').unbind('submit').submit(function(event) {
				validateAgain();
		});

});